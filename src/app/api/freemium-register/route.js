import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { email, password, first_name } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, error: 'Email and password are required' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from('freemium_prospects')
      .select('id')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json({ success: false, error: 'User already exists. Please log in.' }, { status: 400 });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const { data: newUser, error } = await supabase
      .from('freemium_prospects')
      .insert([{
        email,
        password_hash,
        first_name: first_name || '',
        visit_count: 0
      }])
      .select('id, email')
      .single();

    if (error) {
      console.error("Insert error:", error);
      return NextResponse.json({ success: false, error: 'Failed to create account.' }, { status: 500 });
    }

    // Set freemium session cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: 'aurum_freemium_session',
      value: Buffer.from(JSON.stringify({ id: newUser.id, email: newUser.email })).toString('base64'),
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30 // 30 days
    });

    return response;
  } catch (err) {
    console.error('Freemium Register Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const { tx_hash } = await req.json();

    if (!tx_hash) {
      return NextResponse.json({ success: false, error: 'Transaction hash required' }, { status: 400 });
    }

    const cookieStore = cookies();
    const freemiumSession = cookieStore.get('aurum_freemium_session');

    if (!freemiumSession) {
      return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 });
    }

    const decoded = JSON.parse(Buffer.from(freemiumSession.value, 'base64').toString('utf8'));

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from('freemium_payments')
      .insert([{
        prospect_id: decoded.id,
        tx_hash,
        status: 'pending'
      }]);

    if (error) {
      console.error("Payment insert error:", error);
      return NextResponse.json({ success: false, error: 'Failed to submit payment' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Submit Payment Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

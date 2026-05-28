import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

/**
 * GET /api/partner-auth?token=BASE64_EMAIL&redirect=/syllabus
 *
 * Called from the partner portal when navigating to the Syllabus.
 * The partner portal passes the affiliate's email as a base64 token.
 * We verify the email exists in the database, set the aurum_partner_session
 * cookie, and redirect to the syllabus.
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    const redirectPath = searchParams.get('redirect') || '/syllabus';

    if (!token) {
      return NextResponse.redirect(new URL('https://www.welcometoaurum.com/partner/login'));
    }

    // Decode the token (email encoded as base64)
    let email;
    try {
      email = Buffer.from(token, 'base64').toString('utf8');
    } catch {
      return NextResponse.redirect(new URL('https://www.welcometoaurum.com/partner/login'));
    }

    if (!email || !email.includes('@')) {
      return NextResponse.redirect(new URL('https://www.welcometoaurum.com/partner/login'));
    }

    // Verify the affiliate exists in Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

    if (!supabaseUrl || !supabaseKey) {
      // If Supabase is not configured, allow access but log the issue
      console.warn('[partner-auth] Supabase not configured — granting access based on token presence.');
    } else {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data: affiliate } = await supabase
        .from('aurum_affiliates')
        .select('id, email, status')
        .eq('email', email)
        .single();

      const { data: member } = !affiliate ? await supabase
        .from('aurum_members')
        .select('id, email, status')
        .eq('email', email)
        .single() : { data: null };

      const user = affiliate || member;

      if (!user) {
        return NextResponse.redirect(new URL('https://www.welcometoaurum.com/partner/login'));
      }
    }

    // Build the redirect URL (to the syllabus home)
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.welcometoaurum.com';
    const destination = new URL(redirectPath.startsWith('/') ? `${siteUrl}${redirectPath}` : redirectPath);

    const response = NextResponse.redirect(destination);

    // Set the partner session cookie (valid for 7 days)
    const sessionPayload = Buffer.from(JSON.stringify({ email, type: 'partner', ts: Date.now() })).toString('base64');

    response.cookies.set({
      name: 'aurum_partner_session',
      value: sessionPayload,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: 'lax',
    });

    return response;
  } catch (err) {
    console.error('[partner-auth] Error:', err);
    return NextResponse.redirect(new URL('https://www.welcometoaurum.com/partner/login'));
  }
}

import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req) {
  try {
    const cookieStore = await cookies();
    const allCookies = cookieStore.getAll();
    const headersList = Object.fromEntries(req.headers.entries());
    
    // We only show cookie names and presence for security
    const cookieDebug = allCookies.map(c => ({
      name: c.name,
      present: !!c.value,
      length: c.value ? c.value.length : 0
    }));

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      cookies: cookieDebug,
      headers: {
        host: headersList.host,
        'user-agent': headersList['user-agent'],
        'x-forwarded-host': headersList['x-forwarded-host'],
        'x-forwarded-proto': headersList['x-forwarded-proto'],
        'x-real-ip': headersList['x-real-ip'] ? 'PRESENT' : 'MISSING',
        cookie: headersList.cookie ? 'PRESENT' : 'MISSING'
      }
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

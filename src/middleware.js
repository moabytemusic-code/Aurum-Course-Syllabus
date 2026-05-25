import { NextResponse } from "next/server";

export function middleware(request) {
  // Bypass auth checks in local development for easier testing and developer coding
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  // Read session cookie set by your main Welcometoaurum App
  const session = request.cookies.get("aurum_partner_session");

  // If no session exists in production, redirect to login page
  if (!session) {
    const loginUrl = new URL("/partner/login", "https://www.welcometoaurum.com");
    // Pass current path so the login page can redirect the user back after signing in
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Intercept all routes except static folder, images, and favicons
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};

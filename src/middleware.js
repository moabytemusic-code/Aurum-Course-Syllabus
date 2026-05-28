import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow public routes (no auth required)
  if (
    pathname === "/register" ||
    pathname === "/checkout.html" ||
    pathname.startsWith("/api/freemium-register") ||
    pathname.startsWith("/api/submit-payment") ||
    pathname.startsWith("/api/track-visit") ||
    pathname.startsWith("/api/debug-auth") ||
    pathname.startsWith("/api/partner-auth")
  ) {
    return NextResponse.next();
  }

  // Bypass auth checks in local development
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  const partnerSession = request.cookies.get("aurum_partner_session");
  const freemiumSession = request.cookies.get("aurum_freemium_session");

  if (!partnerSession && !freemiumSession) {
    // Redirect to login with current path as the redirect parameter
    // request.nextUrl.pathname is already stripped of basePath by Next.js
    const currentPath = request.nextUrl.pathname;
    const fullPath = `/syllabus${currentPath === "/" ? "" : currentPath}`;

    const loginUrl = new URL("/partner/login", "https://www.welcometoaurum.com");
    loginUrl.searchParams.set("redirect", fullPath + request.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Intercept all routes except static assets
export const config = {
  matcher: [
    "/",
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};


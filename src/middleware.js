import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (
    pathname === "/register" ||
    pathname === "/checkout.html" ||
    pathname.startsWith("/api/freemium-register") ||
    pathname.startsWith("/api/submit-payment") ||
    pathname.startsWith("/api/track-visit") ||
    pathname.startsWith("/api/debug-auth")
  ) {
    return NextResponse.next();
  }

  // Bypass auth checks in local development for easier testing and developer coding
  if (process.env.NODE_ENV === "development") {
    // We still allow development but should ideally test the flow too
    // return NextResponse.next();
  }

  const partnerSession = request.cookies.get("aurum_partner_session");
  const freemiumSession = request.cookies.get("aurum_freemium_session");

  if (!partnerSession && !freemiumSession) {
    const loginUrl = new URL("/partner/login", "https://www.welcometoaurum.com");
    const redirectPath = request.nextUrl.basePath 
      ? (request.nextUrl.pathname === "/" ? request.nextUrl.basePath : `${request.nextUrl.basePath}${request.nextUrl.pathname}`)
      : request.nextUrl.pathname;
    loginUrl.searchParams.set("redirect", redirectPath + request.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Intercept the root path and all other routes except static folder, images, and favicons
export const config = {
  matcher: [
    "/",
    "/((?!_next/static|_next/image|favicon.ico|images/).*)"
  ],
};

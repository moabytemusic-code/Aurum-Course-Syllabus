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

  // --- URL Token Auth (for cross-domain partner portal access) ---
  // If no cookie but ?pt=<base64email> is present in the URL, accept it,
  // set the session cookie, and redirect to the clean URL without the token.
  if (!partnerSession && !freemiumSession) {
    const urlToken = request.nextUrl.searchParams.get("pt");

    if (urlToken) {
      try {
        const email = Buffer.from(urlToken, "base64").toString("utf8");

        if (email && email.includes("@")) {
          // Always redirect to the canonical public URL, never the internal Vercel URL
          const canonicalUrl = new URL("https://www.welcometoaurum.com/syllabus");

          const response = NextResponse.redirect(canonicalUrl);

          // Set the session cookie server-side — response is proxied through
          // welcometoaurum.com so the browser attributes it to that domain
          const sessionPayload = Buffer.from(
            JSON.stringify({ email, type: "partner", ts: Date.now() })
          ).toString("base64");

          response.cookies.set({
            name: "aurum_partner_session",
            value: sessionPayload,
            httpOnly: true,
            path: "/",
            secure: true,
            maxAge: 60 * 60 * 24 * 7, // 7 days
            sameSite: "lax",
            domain: ".welcometoaurum.com",
          });

          return response;
        }
      } catch {
        // Invalid token — fall through to normal auth check
      }
    }

    // No valid session or token — redirect to login
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


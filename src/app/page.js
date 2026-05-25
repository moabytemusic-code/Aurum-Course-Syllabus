import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ClientPage from "./ClientPage";

export const dynamic = 'force-dynamic';

export default async function Page() {
  const cookieStore = cookies();
  const freemiumSession = cookieStore.get('aurum_freemium_session');

  if (freemiumSession) {
    try {
      const decoded = JSON.parse(Buffer.from(freemiumSession.value, 'base64').toString('utf8'));
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      const trackingRes = await fetch(`${baseUrl}/api/track-visit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: decoded.id })
      });
      
      if (trackingRes.ok) {
        const data = await trackingRes.json();
        if (data.locked) {
          redirect('/checkout.html');
        }
      }
    } catch (err) {
      console.error("Tracking Error:", err);
    }
  }

  // Fetch the syllabus from the Chatbot API (Server-Side)
  // We use NEXT_PUBLIC_CHATBOT_URL if available, otherwise default to the deployed Vercel URL
  const API_URL = process.env.NEXT_PUBLIC_CHATBOT_URL || "https://aurum-chatbot.vercel.app";
  
  let courseModules = [];
  try {
    const res = await fetch(`${API_URL}/chat/api/kb/syllabus-data`, {
      cache: 'no-store' // Fetch fresh data on every request so admin updates appear instantly
    });
    
    if (res.ok) {
      const data = await res.json();
      courseModules = data.courseModules || [];
    } else {
      console.error("Failed to fetch syllabus data:", res.status);
    }
  } catch (err) {
    console.error("Error fetching syllabus:", err);
  }

  // Fallback to empty array to prevent client crashes if backend is down
  return <ClientPage initialCourseModules={courseModules} />;
}

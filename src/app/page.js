import ClientPage from "./ClientPage";

export default async function Page() {
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

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Function to sync the new visit count to Brevo
async function syncVisitCountToBrevo(email, newVisitCount) {
  try {
    const res = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY // Use the same Brevo API Key
      },
      body: JSON.stringify({
        attributes: {
          VISIT_COUNT: newVisitCount // Updates this attribute for the user in Brevo CRM
        }
      })
    });

    if (res.ok) {
      console.log(`Successfully synced visit count (${newVisitCount}) to Brevo for ${email}`);
    } else {
      const errData = await res.json();
      console.error('Failed to sync visit count to Brevo:', errData.message);
    }
  } catch (error) {
    console.error('Brevo sync network error:', error.message);
  }
}

export async function POST(req) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ success: false, error: 'User ID required' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: user, error } = await supabase
      .from('freemium_prospects')
      .select('*')
      .eq('id', userId)
      .single();

    if (error || !user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }

    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    let { visit_count, last_visit_date, email, first_name } = user;

    if (last_visit_date !== today) {
      visit_count += 1;
      last_visit_date = today;

      await supabase
        .from('freemium_prospects')
        .update({ visit_count, last_visit_date })
        .eq('id', userId);

      // Sync the updated visit count to Brevo
      if (email) {
        await syncVisitCountToBrevo(email, visit_count);
      }

      // Trigger 8th visit email via Brevo
      if (visit_count === 8) {
        if (process.env.BREVO_API_KEY) {
          try {
            await fetch('https://api.brevo.com/v3/smtp/email', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY
              },
              body: JSON.stringify({
                to: [{ email, name: first_name || '' }],
                templateId: 832, // Assuming 832 is the final reminder template
                params: {
                  FIRSTNAME: first_name || ''
                }
              })
            });
            console.log(`Sent 8th visit reminder to ${email}`);
          } catch (e) {
            console.error('Failed to send 8th visit reminder', e);
          }
        }
      }
    }

    if (visit_count > 10) {
      // Check if user has an approved payment before locking them out
      const { data: approvedPayment } = await supabase
        .from('freemium_payments')
        .select('id')
        .eq('prospect_id', userId)
        .eq('status', 'approved')
        .maybeSingle();

      if (approvedPayment) {
        return NextResponse.json({ success: true, locked: false, visit_count });
      }

      return NextResponse.json({ success: true, locked: true, visit_count });
    }

    return NextResponse.json({ success: true, locked: false, visit_count });
  } catch (err) {
    console.error('Track Visit Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

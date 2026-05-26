import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const { tx_hash, email, firstName, lastName } = await req.json();

    if (!tx_hash) {
      return NextResponse.json({ success: false, error: 'Transaction hash required' }, { status: 400 });
    }

    const cookieStore = cookies();
    const freemiumSession = cookieStore.get('aurum_freemium_session');

    let prospectId;
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    if (freemiumSession) {
      const decoded = JSON.parse(Buffer.from(freemiumSession.value, 'base64').toString('utf8'));
      prospectId = decoded.id;
    } else if (email) {
      // Find or create prospect by email
      const { data: existingProspect } = await supabase
        .from('freemium_prospects')
        .select('id')
        .eq('email', email.trim().toLowerCase())
        .single();

      if (existingProspect) {
        prospectId = existingProspect.id;
      } else {
        // Create a new prospect so we have an ID to reference
        const { data: newProspect, error: insertErr } = await supabase
          .from('freemium_prospects')
          .insert([{
            email: email.trim().toLowerCase(),
            password_hash: 'paid_services_bypass', // dummy/placeholder
            first_name: firstName || '',
            visit_count: 0
          }])
          .select('id')
          .single();

        if (insertErr) {
          console.error("Failed to create prospect for anonymous payment:", insertErr);
          return NextResponse.json({ success: false, error: 'Failed to identify prospect' }, { status: 500 });
        }
        prospectId = newProspect.id;
      }

      // Also update matching aurum_orders status to 'pending_verification'
      try {
        await supabase
          .from('aurum_orders')
          .update({ status: 'pending_verification' })
          .eq('email', email.trim().toLowerCase())
          .eq('status', 'pending_payment');
      } catch (orderErr) {
        console.warn("Failed to update aurum_orders:", orderErr);
      }
    } else {
      return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 });
    }

    const { error } = await supabase
      .from('freemium_payments')
      .insert([{
        prospect_id: prospectId,
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

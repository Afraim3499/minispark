import { supabase } from "@/lib/supabase";
import { LeadsDashboard } from "@/components/admin/LeadsDashboard";

export const revalidate = 0; // Ensure fresh data on every load for admin

export default async function AdminLeadsPage() {
    // Fetch leads ordered by most recent first
    const { data: leads, error } = await supabase
        .from("lead_submissions")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching leads:", error);
    }

    return (
        <LeadsDashboard initialLeads={leads || []} />
    );
}

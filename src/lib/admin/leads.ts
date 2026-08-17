import type { LeadRow } from "@/types/database";
import { getSupabaseService } from "@/lib/supabase/admin";

export type LeadFilters = {
  q?: string;
  loanType?: string;
};

export type DashboardStats = {
  total: number;
  today: number;
  week: number;
  cities: number;
  byLoanType: { type: string; count: number }[];
  recent: LeadRow[];
};

function startOfTodayISO() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

function startOfWeekISO() {
  const d = new Date();
  const day = d.getDay();
  const diff = day === 0 ? 6 : day - 1;
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

export async function fetchLeads(filters: LeadFilters = {}) {
  const supabase = getSupabaseService();
  let query = supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (filters.loanType) {
    query = query.eq("loan_type", filters.loanType);
  }

  if (filters.q) {
    const q = filters.q.trim();
    query = query.or(
      `name.ilike.%${q}%,phone.ilike.%${q}%,city.ilike.%${q}%,loan_type.ilike.%${q}%`,
    );
  }

  const { data, error } = await query.limit(200);
  if (error) throw error;
  return (data ?? []) as LeadRow[];
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const supabase = getSupabaseService();
  const today = startOfTodayISO();
  const week = startOfWeekISO();

  const [allRes, todayRes, weekRes] = await Promise.all([
    supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500),
    supabase
      .from("leads")
      .select("*", { count: "exact", head: true })
      .gte("created_at", today),
    supabase
      .from("leads")
      .select("*", { count: "exact", head: true })
      .gte("created_at", week),
  ]);

  if (allRes.error) throw allRes.error;
  if (todayRes.error) throw todayRes.error;
  if (weekRes.error) throw weekRes.error;

  const leads = (allRes.data ?? []) as LeadRow[];
  const counts = new Map<string, number>();
  const cities = new Set<string>();

  for (const lead of leads) {
    counts.set(lead.loan_type, (counts.get(lead.loan_type) ?? 0) + 1);
    if (lead.city) cities.add(lead.city.trim().toLowerCase());
  }

  const byLoanType = [...counts.entries()]
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);

  return {
    total: leads.length,
    today: todayRes.count ?? 0,
    week: weekRes.count ?? 0,
    cities: cities.size,
    byLoanType,
    recent: leads.slice(0, 8),
  };
}

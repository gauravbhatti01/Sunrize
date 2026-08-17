-- Run this in Supabase Dashboard → SQL Editor

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  city text not null,
  loan_type text not null,
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

-- Service role bypasses RLS. No public read access.
-- Optional: allow anon inserts if you ever call Supabase from the browser.
drop policy if exists "Allow public lead inserts" on public.leads;
create policy "Allow public lead inserts"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

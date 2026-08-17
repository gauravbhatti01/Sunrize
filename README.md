# SunRize DSA Loans

Next.js rebuild of the [SunRize](https://sun-rize--bhimprakash1989.replit.app/) loan advisory site — clean App Router structure, shared data layer, and production-ready pages.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

- Production: [https://www.sunrize.in](https://www.sunrize.in)
- GitHub / Vercel account: `sunrize9026-dot`
- Commits for auto-deploy must use the SunRize GitHub author (not a personal account), otherwise Vercel may show **Blocked**.

## Admin portal

- Login: `/admin/login`
- Dashboard: `/admin`
- Leads list: `/admin/leads`

Set `ADMIN_PASSWORD` in `.env.local` (default for local: `sunrize-admin`).
Admin reads use `SUPABASE_SERVICE_ROLE_KEY`.

## Supabase leads

Callback / apply form data is saved to the `leads` table.

1. Create a project at [supabase.com](https://supabase.com)
2. In **SQL Editor**, run `supabase/migrations/001_create_leads.sql`
3. In **Project Settings → API**, copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`
   - publishable/anon → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Put values in `.env.local`, then restart `npm run dev`

Leads appear in Supabase → **Table Editor → leads**, and in `/admin`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | ESLint |

## Structure

```
src/
├── app/
│   ├── (marketing)/          # Public site pages
│   ├── admin/                # Dashboard + leads listing
│   └── api/                  # callback + admin auth
├── components/
│   ├── admin/                # Admin UI
│   ├── home/                 # Landing sections
│   ├── layout/               # Header, Footer
│   ├── forms/                # CallbackForm
│   └── ui/
├── lib/
│   ├── admin/                # Auth + lead queries
│   ├── supabase/             # Supabase clients
│   └── data/
└── types/
```

## Pages

- `/` — Full marketing homepage
- `/loans` — All products
- `/loans/[slug]` — Product detail
- `/apply` — Callback / apply form
- `/contact` — Experts + form
- `/admin` — Admin dashboard
- `/admin/leads` — Leads listing
- `/admin/login` — Admin login

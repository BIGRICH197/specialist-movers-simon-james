# Simon James proposal (standalone)

Private pitch deck only. Not the main Specialist Movers website.

- Local dev: `npm install` then `npm run dev` → http://localhost:3011
- Deck is the homepage (`/`)

## Deploy on Vercel (separate from main site)

1. Create a **new GitHub repo** (e.g. `specialist-movers-simon-james`).
2. Push this folder to that repo.
3. [vercel.com](https://vercel.com) → **Add New Project** → import that repo.
4. Framework: Next.js (auto). Build: `npm run build`. No env vars required.
5. Deploy. You get `https://something.vercel.app`.
6. Optional domain: `simon-james.specialistmovers.co.nz` (DNS CNAME to Vercel).

**Main website** stays a **different** Vercel project from `specialist-movers1`.

Share only the Simon James URL. Page is `noindex`.

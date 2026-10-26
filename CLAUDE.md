# NorWealth — instruksjoner for Claude Code og Copilot

## Hva dette er

Monorepo med npm workspaces. Erstatter det gamle WordPress-oppsettet.
Supabase-backenden (prosjekt `nzbefevidumeardbyflt`) er **uendret** og
gjenbrukes som den er: alle Edge Functions, cron-jobber og RLS-policyer
fra det gamle oppsettet gjelder fortsatt.

## Struktur

- `sites/web` — Astro. All offentlig, indekserbar HTML.
- `sites/app` — React + Vite. Alt bak innlogging.
- `packages/core` — delt. `tokens.css`, `nwfe.js`, `tenants/*.css`.

## Regler som ikke forhandles

1. **Ingen hardkodede hex-verdier.** Alltid `var(--nw-*)`.
2. **NWFE er én fil.** `packages/core/nwfe.js`. I det gamle oppsettet var den
   duplisert i to HTML-filer; det var en ren konsekvens av at WordPress ikke
   hadde byggesteg. Dupliser den aldri igjen.
3. **SEO-kritisk innhold i initial HTML.** Overskrift, ingress, forklaring og
   FAQ på en kalkulatorside skal være Astro-markup. Bare selve regnemaskinen
   er en React-øy (`client:visible`). AI-crawlere kjører i praksis ikke
   JavaScript — det som bare finnes etter hydrering er usynlig for dem.
4. **Tetthet er et attributt, ikke et komponentsett.** `data-density="compact"`
   på rot i proffverktøy. Ikke bygg to varianter av samme tabell.
5. **Service-key aldri i frontend.** Kun anon-key. Service-key hører i Edge
   Functions via `Deno.env.get()`.

## Arbeidsdeling mellom maskinene

- **Claude Code (Mac mini kjeller)** — strukturelt arbeid: oppsett, flytting av
  filer, refaktorering, alt som berører mange filer samtidig.
- **Copilot (Mac mini kontor)** — lokalt arbeid i én fil.

Ikke be Copilot om arkitekturendringer. I det gamle oppsettet ga det en
admin-side som gikk helt svart fordi generert ES6 ble limt inn i et miljø
som bare tålte ES5.

## Status

Fase 0: grunnmur satt opp. Ingen verktøy flyttet ennå.
Neste: Sparekalkulatoren, hele veien — Astro-side + React-øy + NWFE + Supabase-auth.

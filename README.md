# NorWealth

Monorepo. To apper, én delt pakke.

| Mappe | Hva | Deployes til |
|---|---|---|
| `sites/web` | Innhold: forside, blogg, kalkulatorsider. Astro — statisk HTML. | norwealth.no |
| `sites/app` | Verktøy bak innlogging. React + Vite. | app.norwealth.no |
| `packages/core` | Tokens, NWFE-motoren, tenant-temaer. Importeres av begge. | — |

## Kom i gang

```
npm install
npm run dev:web     # http://localhost:4321
npm run dev:app     # http://localhost:5173
```

## Regler

- Ingen hardkodede farger. Bruk `var(--nw-*)` fra `packages/core/tokens.css`.
- NWFE finnes i **én** fil: `packages/core/nwfe.js`. Aldri kopier den.
- Innhold som skal indekseres av Google må være i HTML-en før JavaScript kjører.
  Det betyr Astro-siden, ikke React-appen.

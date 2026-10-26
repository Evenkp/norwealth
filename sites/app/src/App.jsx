import { useState } from 'react';
// Den delte regnefunksjonen, hentet fra pakken — ikke en lokal kopi.
import { sparing as beregn, formaterKr as kr } from '@norwealth/core/sparing.js';

export default function App() {
  const [manedlig, setManedlig] = useState(3000);
  const r = beregn({ manedlig, arlingRente: 0.06, ar: 20 });

  return (
    <main style={{ maxWidth: 1240, margin: '0 auto', padding: 'var(--nw-space-8) var(--nw-space-7)' }}>
      <h1 className="nw-display-m" style={{ margin: 0, color: 'var(--nw-brand-500)' }}>
        Appen kjører.
      </h1>
      <p className="nw-body" style={{ maxWidth: '44ch', color: 'var(--nw-ink-200)' }}>
        Dette er React-halvdelen. Den deler tokens og regnelogikk med Astro-siden.
      </p>

      <label className="nw-label" htmlFor="belop" style={{ display: 'block', marginTop: 'var(--nw-space-6)' }}>
        Månedlig sparing
      </label>
      <input
        id="belop"
        type="number"
        value={manedlig}
        onChange={(e) => setManedlig(Number(e.target.value) || 0)}
        className="nw-figure-m"
        style={{
          marginTop: 'var(--nw-space-2)',
          minHeight: 60,
          width: 200,
          padding: '0 var(--nw-space-5)',
          border: '2px solid var(--nw-border-200)',
          borderRadius: 'var(--nw-radius-md)',
          background: 'var(--nw-surface-000)',
          color: 'var(--nw-ink-100)',
        }}
      />

      <section style={{
        marginTop: 'var(--nw-space-7)',
        padding: 'var(--nw-space-7)',
        borderRadius: 'var(--nw-radius-2xl)',
        background: 'var(--nw-brand-500)',
        color: 'var(--nw-on-brand)',
      }}>
        <p className="nw-overline" style={{ margin: 0, color: 'var(--nw-on-brand-muted)' }}>
          Om 20 år har du
        </p>
        <div className="nw-figure-l" style={{ marginTop: 'var(--nw-space-3)' }}>
          {kr(r.verdi)}
        </div>
        <p className="nw-caption" style={{ marginTop: 'var(--nw-space-4)', color: 'var(--nw-on-brand-muted)' }}>
          Innskutt {kr(r.innskutt)} · avkastning{' '}
          <span style={{ color: 'var(--nw-accent-500)' }}>{kr(r.avkastning)}</span>
        </p>
      </section>
    </main>
  );
}

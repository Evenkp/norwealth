// Sparekalkulator — ren funksjon, delt mellom Astro-siden og React-øya.
//
// Månedlige innskudd, månedlig renteberegning.

export function sparing({ manedlig, arlingRente, ar }) {
  const n = Math.round(ar * 12);
  const r = arlingRente / 12;

  const innskutt = manedlig * n;

  // Sluttverdi av annuitet, innskudd ved slutten av hver måned.
  const verdi = r === 0
    ? innskutt
    : manedlig * ((Math.pow(1 + r, n) - 1) / r);

  return {
    innskutt: Math.round(innskutt),
    verdi: Math.round(verdi),
    avkastning: Math.round(verdi - innskutt),
  };
}

export function formaterKr(n) {
  return new Intl.NumberFormat('nb-NO', { maximumFractionDigits: 0 }).format(n);
}

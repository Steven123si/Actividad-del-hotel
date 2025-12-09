export function round(value: number, digits = 2): number {
  return Number(value.toFixed(digits));
}
export function add(a: number, b: number, digits = 2): number { return round(a + b, digits); }
export function sub(a: number, b: number, digits = 2): number { return round(a - b, digits); }
export function mul(a: number, b: number, digits = 2): number { return round(a * b, digits); }
export function safeDiv(a: number, b: number, digits = 2): number {
  if (b === 0) return NaN;
  return round(a / b, digits);
}
export function pow(a: number, b: number, digits = 2): number { return round(a ** b, digits); }
export function mod(a: number, b: number): number { if (b === 0) return NaN; return a % b; }
export function parseNum(s: string, fallback = 0): number {
  const n = Number(s.replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}
export function formatCurrencyCOP(value: number): string {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);
}
export function formatNumber(value: number, digits = 2): string {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("es-CO", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
}

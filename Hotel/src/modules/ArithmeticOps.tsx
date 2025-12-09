import React from "react";
import { add, sub, mul, safeDiv, pow, mod, parseNum, formatCurrencyCOP, formatNumber } from "@/lib/math";

type Op = "add" | "sub" | "mul" | "div" | "pow" | "mod";

const LABELS: Record<Op, string> = {
  add: "Suma (a + b)",
  sub: "Resta (a - b)",
  mul: "Multiplicación (a × b)",
  div: "División (a ÷ b)",
  pow: "Potencia (a ^ b)",
  mod: "Módulo (a % b)",
};

export default function ArithmeticOps() {
  const [a, setA] = React.useState("1200.50");
  const [b, setB] = React.useState("8.25");
  const [op, setOp] = React.useState<Op>("add");
  const [digits, setDigits] = React.useState(2);

  const aN = parseNum(a);
  const bN = parseNum(b);

  const result = React.useMemo(() => {
    switch (op) {
      case "add": return add(aN, bN, digits);
      case "sub": return sub(aN, bN, digits);
      case "mul": return mul(aN, bN, digits);
      case "div": return safeDiv(aN, bN, digits);
      case "pow": return pow(aN, bN, digits);
      case "mod": return mod(aN, bN);
    }
  }, [aN, bN, op, digits]);

  const error = Number.isNaN(result) ? "⚠️ Operación inválida (verifica división o módulo por cero)." : "";

  const ivaRate = 0.19;
  const subtotal = mul(aN, bN, 2);
  const iva = mul(subtotal, ivaRate, 2);
  const total = add(subtotal, iva, 2);

  return (
    <div>
      <h2>4) Operaciones aritméticas</h2>
      <div style={{ display: "grid", gap: 8, maxWidth: 540 }}>
        <label>
          a:
          <input inputMode="decimal" value={a} onChange={(e) => setA(e.target.value)} placeholder="Ej: 1200.50" />
        </label>
        <label>
          b:
          <input inputMode="decimal" value={b} onChange={(e) => setB(e.target.value)} placeholder="Ej: 8.25" />
        </label>
        <label>
          Operación:
          <select value={op} onChange={(e) => setOp(e.target.value as Op)}>
            {Object.entries(LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </label>
        <label>
          Decimales:
          <input type="number" min={0} max={6} step={1} value={digits} onChange={(e) => setDigits(Number(e.target.value) || 0)} />
        </label>
      </div>

      <div style={{ marginTop: 12 }}>
        <p><strong>Resultado:</strong> <code>{Number.isFinite(result as number) ? formatNumber(result as number, digits) : "—"}</code></p>
        {error && <p style={{ color: "tomato" }}>{error}</p>}
      </div>

      <hr />

      <h3>Ejemplo aplicado (subtotal + IVA 19% + total)</h3>
      <p>Interpretación: <em>a × b = subtotal</em>. Luego se calcula IVA y total.</p>
      <ul>
        <li>Subtotal: <strong>{formatCurrencyCOP(subtotal)}</strong></li>
        <li>IVA (19%): <strong>{formatCurrencyCOP(iva)}</strong></li>
        <li>Total: <strong>{formatCurrencyCOP(total)}</strong></li>
      </ul>
    </div>
  );
}

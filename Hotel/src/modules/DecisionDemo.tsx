import React from 'react'

type MetodoPago = 'efectivo' | 'tarjeta' | 'transferencia'

function recargoPorMetodo(m: MetodoPago): number {
  switch (m) {
    case 'efectivo': return -0.05
    case 'tarjeta': return 0.015
    case 'transferencia': return 0
    default: {
      const _never: never = m; throw new Error('Método no soportado: ' + _never)
    }
  }
}

export function DecisionDemo(){
  const [total, setTotal] = React.useState(180)
  const [metodo, setMetodo] = React.useState<MetodoPago>('tarjeta')

  const ticket = total > 300 ? 'alto' : total > 150 ? 'medio' : 'bajo'
  const factor = recargoPorMetodo(metodo)
  const totalFinal = total * (1 + factor)

  return (
    <div>
      <h2>2) Estructuras de decisión (if/switch/ternario)</h2>
      <div style={{ display:'grid', gap: 8, maxWidth: 420 }}>
        <label>
          Total base ($):
          <input type="number" value={total}
                 onChange={e => setTotal(Number(e.target.value) || 0)}/>
        </label>
        <label>
          Método de pago:
          <select value={metodo} onChange={e => setMetodo(e.target.value as MetodoPago)}>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </label>
      </div>

      <p>Ticket: <strong>{ticket.toUpperCase()}</strong></p>
      <p>Factor por método: <code>{(factor*100).toFixed(2)}%</code></p>
      <p>Total final: <strong>${totalFinal.toFixed(2)}</strong></p>

      {ticket === 'alto' ? (
        <p>🎉 Beneficio VIP aplicado.</p>
      ) : ticket === 'medio' ? (
        <p>✅ Beneficio estándar.</p>
      ) : (
        <p>ℹ️ Sin beneficios adicionales.</p>
      )}
    </div>
  )
}

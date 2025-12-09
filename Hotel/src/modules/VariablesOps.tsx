import React from 'react'

type Producto = { id: string; nombre: string; precio: number; stock?: number }

export function VariablesOps(){
  const empresa: string = 'MAJEK'
  let anio = 2025
  const activo = true

  const p1: Producto = { id:'p1', nombre:'Mouse Pro', precio:39, stock: 12 }
  const precios: number[] = [39, 69, 129.9]

  const iva = 0.19
  const subtotal = precios.reduce((a, n) => a + n, 0)
  const total = subtotal * (1 + iva)

  const [cantidad, setCantidad] = React.useState(1)

  return (
    <div>
      <h2>1) Variables y operaciones</h2>
      <ul>
        <li><strong>empresa:</strong> {empresa}</li>
        <li><strong>año:</strong> {anio}</li>
        <li><strong>activo:</strong> {String(activo)}</li>
        <li><strong>producto:</strong> {p1.nombre} (${p1.precio})</li>
        <li><strong>subtotal:</strong> {subtotal.toFixed(2)}</li>
        <li><strong>total con IVA:</strong> {total.toFixed(2)}</li>
      </ul>
      <div style={{ display:'flex', gap: 8, alignItems:'center' }}>
        <button onClick={() => setCantidad(c => Math.max(1, c-1))}>-</button>
        <span>Cantidad: {cantidad}</span>
        <button onClick={() => setCantidad(c => c+1)}>+</button>
        <span>Total x cantidad: <code>${(total * cantidad).toFixed(2)}</code></span>
      </div>
    </div>
  )
}

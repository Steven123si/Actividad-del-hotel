import React from 'react'

type Producto = { id:string; nombre:string; precio:number; stock?:number }

const BASE: Producto[] = [
  { id:'p1', nombre:'Mouse Pro', precio:39, stock: 12 },
  { id:'p2', nombre:'Teclado', precio:69, stock: 8 },
  { id:'p3', nombre:'Auriculares', precio:129.9, stock: 3 },
]

function useInterval(cb: () => void, ms: number){
  React.useEffect(() => {
    const id = setInterval(cb, ms)
    return () => clearInterval(id)
  }, [cb, ms])
}

export function LoopsDemo(){
  const [items, setItems] = React.useState<Producto[]>(BASE)

  const [avg, setAvg] = React.useState(0)
  React.useEffect(() => {
    let sum = 0
    for (const it of items) sum += it.precio
    setAvg(Number((sum / items.length).toFixed(2)))
  }, [items])

  function ajustarStock(){
    const cloned = structuredClone(items) as Producto[]
    let i = 0
    while (i < cloned.length) {
      if ((cloned[i].stock ?? 0) < 5) {
        cloned[i].stock = (cloned[i].stock ?? 0) + 1
      }
      i++
    }
    let j = 0
    do { j++ } while (j < 0)
    setItems(cloned)
  }

  useInterval(ajustarStock, 5000)

  const mapById: Record<string, Producto> = {}
  for (const k in items) {
    const idx = Number(k)
    mapById[items[idx].id] = items[idx]
  }

  const caros = items.filter(p => p.precio >= 60)
  const total = items.reduce((acc, p) => acc + p.precio, 0)

  return (
    <div>
      <h2>3) Estructuras de control (ciclos)</h2>
      <p>Promedio de precio (for...of en efecto): <strong>${avg}</strong></p>
      <button onClick={ajustarStock}>Ajustar stock ahora</button>

      <h3>Listado (render con map)</h3>
      <table>
        <thead><tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Stock</th></tr></thead>
        <tbody>
          {items.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
              <td>{p.stock ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Caros (≥ 60): <strong>{caros.length}</strong> | Total precios (reduce): <strong>${total.toFixed(2)}</strong></p>

      <details>
        <summary>mapById (construido con for...in)</summary>
        <pre>{JSON.stringify(mapById, null, 2)}</pre>
      </details>
    </div>
  )
}

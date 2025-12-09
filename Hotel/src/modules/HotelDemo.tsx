import React from 'react'
import { mul, add, sub, formatCurrencyCOP } from '@/lib/math'

function obtenerTarifaDiaria(huespedes: number): number {
  if (huespedes === 1) {
    return 2500
  } else if (huespedes === 2) {
    return 4600
  } else {
    return 5200
  }
}

function obtenerPorcentajeDescuento(huespedes: number): number {
  switch (true) {
    case huespedes === 1:
      return 0.05
    case huespedes === 2:
      return 0.09
    case huespedes >= 3:
      return 0.15
    default:
      return 0
  }
}

export function HotelDemo() {
  const [cantidadHuespedes, setCantidadHuespedes] = React.useState(2)
  const [diasEstadia, setDiasEstadia] = React.useState(3)

  const tarifaDiaria = obtenerTarifaDiaria(cantidadHuespedes)
  const subtotal = mul(tarifaDiaria, diasEstadia, 2)
  
  const IVA_RATE = 0.16
  const montoIVA = mul(subtotal, IVA_RATE, 2)
  const precioConIVA = add(subtotal, montoIVA, 2)
  
  const porcentajeDescuento = obtenerPorcentajeDescuento(cantidadHuespedes)
  const montoDescuento = mul(precioConIVA, porcentajeDescuento, 2)
  const precioFinal = sub(precioConIVA, montoDescuento, 2)

  return (
    <div>
      <h2>Sistema de Reservas - Hotel WC</h2>
      <p style={{ color: '#555', fontSize: '1.05rem' }}>
        Cálculo automatizado de tarifas con IVA del 16% y descuentos por ocupación
      </p>

      {/* Formulario de entrada */}
      <div style={{ 
        display: 'grid', 
        gap: 16, 
        maxWidth: 500, 
        background: '#f0f4f8', 
        padding: 24, 
        borderRadius: 12,
        marginBottom: 32,
        border: '2px solid #cbd5e0'
      }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#2d3748' }}>Datos de Reserva</h3>
        
        <label>
          <strong style={{ color: '#2d3748', fontSize: '1rem' }}>Cantidad de huéspedes:</strong>
          <input
            type="number"
            min={1}
            max={10}
            value={cantidadHuespedes}
            onChange={(e) => setCantidadHuespedes(Math.max(1, Number(e.target.value) || 1))}
            style={{ 
              marginTop: 8,
              fontSize: '1.1rem',
              padding: '12px'
            }}
          />
        </label>

        <label>
          <strong style={{ color: '#2d3748', fontSize: '1rem' }}>Días de estadía:</strong>
          <input
            type="number"
            min={1}
            max={30}
            value={diasEstadia}
            onChange={(e) => setDiasEstadia(Math.max(1, Number(e.target.value) || 1))}
            style={{ 
              marginTop: 8,
              fontSize: '1.1rem',
              padding: '12px'
            }}
          />
        </label>
      </div>

      {/* Lógica de tarifas */}
      <div style={{ 
        background: '#dbeafe', 
        padding: 20, 
        borderRadius: 12, 
        marginBottom: 24,
        border: '2px solid #3b82f6'
      }}>
        <h3 style={{ marginTop: 0, color: '#1e40af' }}>Tarifa Aplicada</h3>
        {cantidadHuespedes === 1 && (
          <p style={{ color: '#1e3a8a', fontSize: '1.1rem', margin: 0 }}>
            <strong>1 huésped</strong> - Tarifa diaria: <strong>{formatCurrencyCOP(2500)}</strong>
          </p>
        )}
        {cantidadHuespedes === 2 && (
          <p style={{ color: '#1e3a8a', fontSize: '1.1rem', margin: 0 }}>
            <strong>2 huéspedes</strong> - Tarifa diaria: <strong>{formatCurrencyCOP(4600)}</strong>
          </p>
        )}
        {cantidadHuespedes >= 3 && (
          <p style={{ color: '#1e3a8a', fontSize: '1.1rem', margin: 0 }}>
            <strong>3 o más huéspedes</strong> - Tarifa diaria: <strong>{formatCurrencyCOP(5200)}</strong>
          </p>
        )}
      </div>

      {/* Cálculos paso a paso */}
      <div style={{ 
        background: '#fef3c7', 
        padding: 20, 
        borderRadius: 12, 
        marginBottom: 24,
        border: '2px solid #f59e0b'
      }}>
        <h3 style={{ marginTop: 0, color: '#78350f' }}>Proceso de Cálculo</h3>
        
        <div style={{ marginBottom: 16 }}>
          <strong style={{ color: '#78350f', fontSize: '1.05rem' }}>PASO 1: Subtotal (sin IVA)</strong>
          <p style={{ margin: '8px 0', color: '#451a03', fontSize: '1rem' }}>
            {formatCurrencyCOP(tarifaDiaria)} × {diasEstadia} días = <strong style={{ fontSize: '1.15rem' }}>{formatCurrencyCOP(subtotal)}</strong>
          </p>
        </div>

        <div style={{ marginBottom: 16 }}>
          <strong style={{ color: '#78350f', fontSize: '1.05rem' }}>PASO 2: Aplicar IVA (16%)</strong>
          <p style={{ margin: '8px 0', color: '#451a03', fontSize: '1rem' }}>
            Monto IVA: {formatCurrencyCOP(subtotal)} × 16% = {formatCurrencyCOP(montoIVA)}
          </p>
          <p style={{ margin: '8px 0', color: '#451a03', fontSize: '1rem' }}>
            Precio + IVA: {formatCurrencyCOP(subtotal)} + {formatCurrencyCOP(montoIVA)} = <strong style={{ fontSize: '1.15rem' }}>{formatCurrencyCOP(precioConIVA)}</strong>
          </p>
        </div>

        <div>
          <strong style={{ color: '#78350f', fontSize: '1.05rem' }}>PASO 3: Aplicar Descuento ({(porcentajeDescuento * 100).toFixed(0)}%)</strong>
          <p style={{ margin: '8px 0', color: '#451a03', fontSize: '1rem' }}>
            Descuento: {formatCurrencyCOP(precioConIVA)} × {(porcentajeDescuento * 100).toFixed(0)}% = {formatCurrencyCOP(montoDescuento)}
          </p>
          <p style={{ margin: '8px 0', color: '#451a03', fontSize: '1rem' }}>
            Precio Final: {formatCurrencyCOP(precioConIVA)} - {formatCurrencyCOP(montoDescuento)} = <strong style={{ fontSize: '1.15rem' }}>{formatCurrencyCOP(precioFinal)}</strong>
          </p>
        </div>
      </div>

      {/* Resultados finales */}
      <div style={{ 
        background: '#d1fae5', 
        padding: 24, 
        borderRadius: 12,
        border: '3px solid #10b981'
      }}>
        <h3 style={{ marginTop: 0, color: '#065f46' }}>RESUMEN DE RESERVA</h3>
        <table style={{ width: '100%', maxWidth: 600 }}>
          <tbody>
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '12px', color: '#064e3b', fontWeight: 'bold' }}>1. Precio sin IVA (Subtotal):</td>
              <td style={{ textAlign: 'right', padding: '12px' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#065f46' }}>
                  {formatCurrencyCOP(subtotal)}
                </span>
              </td>
            </tr>
            <tr style={{ background: '#ecfdf5' }}>
              <td style={{ padding: '12px', color: '#064e3b', fontWeight: 'bold' }}>2. Precio con IVA (16%):</td>
              <td style={{ textAlign: 'right', padding: '12px' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#065f46' }}>
                  {formatCurrencyCOP(precioConIVA)}
                </span>
              </td>
            </tr>
            <tr style={{ background: '#a7f3d0', border: '2px solid #10b981' }}>
              <td style={{ padding: '16px', color: '#064e3b', fontWeight: 'bold', fontSize: '1.1rem' }}>
                3. PRECIO FINAL CON DESCUENTO:
              </td>
              <td style={{ textAlign: 'right', padding: '16px' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#047857' }}>
                  {formatCurrencyCOP(precioFinal)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        
        <p style={{ marginTop: 20, marginBottom: 0, fontSize: '1rem', color: '#065f46', fontWeight: '500' }}>
          Ahorro total: <strong>{formatCurrencyCOP(montoDescuento)}</strong> ({(porcentajeDescuento * 100).toFixed(0)}% de descuento aplicado)
        </p>
      </div>

      {/* Política de descuentos - CONTRASTE MEJORADO */}
      <details style={{ marginTop: 24 }}>
        <summary style={{ 
          fontSize: '1.05rem',
          fontWeight: 'bold',
          color: '#1f2937',
          padding: '12px',
          background: '#e5e7eb',
          border: '1px solid #9ca3af'
        }}>
          Política de Tarifas y Descuentos
        </summary>
        <div style={{ 
          padding: '20px', 
          background: '#ffffff', 
          marginTop: '8px', 
          border: '2px solid #6b7280', 
          borderRadius: '8px' 
        }}>
          <h4 style={{ color: '#111827', marginTop: 0, fontSize: '1.1rem' }}>Tarifas por Ocupación:</h4>
          <ul style={{ color: '#111827', lineHeight: 1.8, fontSize: '1rem' }}>
            <li><strong>1 huésped:</strong> <strong style={{ color: '#0066cc' }}>$2,500</strong> por noche</li>
            <li><strong>2 huéspedes:</strong> <strong style={{ color: '#0066cc' }}>$4,600</strong> por noche</li>
            <li><strong>3 o más huéspedes:</strong> <strong style={{ color: '#0066cc' }}>$5,200</strong> por noche</li>
          </ul>
          
          <h4 style={{ color: '#111827', fontSize: '1.1rem' }}>Descuentos Aplicados:</h4>
          <ul style={{ color: '#111827', lineHeight: 1.8, fontSize: '1rem' }}>
            <li><strong>1 huésped:</strong> <strong style={{ color: '#059669' }}>5%</strong> sobre el precio con IVA</li>
            <li><strong>2 huéspedes:</strong> <strong style={{ color: '#059669' }}>9%</strong> sobre el precio con IVA</li>
            <li><strong>3 o más huéspedes:</strong> <strong style={{ color: '#059669' }}>15%</strong> sobre el precio con IVA</li>
          </ul>
          
          <p style={{ color: '#374151', fontSize: '0.95rem', marginBottom: 0, fontStyle: 'italic' }}>
            * Todos los precios incluyen IVA del 16%
          </p>
        </div>
      </details>
    </div>
  )
}

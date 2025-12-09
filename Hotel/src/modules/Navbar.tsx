import React from 'react'

export function Navbar() {
  return (
    <nav style={{
      background: '#0066cc',
      padding: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: 'white'
        }}>
          Hotel WC
        </div>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '24px',
          margin: 0,
          padding: 0
        }}>
          <li><a href="#hotel" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Sistema</a></li>
          <li><a href="#contacto" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

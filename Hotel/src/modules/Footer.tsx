import React from 'react'

export function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer style={{
      marginTop: '48px',
      padding: '32px 16px',
      background: '#1a1a1a',
      color: '#fff',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#fff' }}>MAJEK © {year}</h3>
        <p style={{ margin: '8px 0', color: '#ccc' }}>
          Ejemplos prácticos de React + TypeScript
        </p>
        <div style={{ marginTop: '16px' }}>
          <a href="#" style={{ color: '#0066cc', margin: '0 12px', textDecoration: 'none' }}>GitHub</a>
          <a href="#" style={{ color: '#0066cc', margin: '0 12px', textDecoration: 'none' }}>LinkedIn</a>
          <a href="#" style={{ color: '#0066cc', margin: '0 12px', textDecoration: 'none' }}>Email</a>
        </div>
      </div>
    </footer>
  )
}

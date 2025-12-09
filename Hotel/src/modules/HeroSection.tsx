import React from 'react'

export function HeroSection() {
  return (
    <section style={{
      padding: '60px 16px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Logo del hotel */}
        <img 
          src="/logo-hotel.png" 
          alt="Hotel WC Logo" 
          style={{ 
            width: '200px', 
            height: 'auto', 
            marginBottom: '24px',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
          }}
        />
        
        <h1 style={{ 
          fontSize: '2.5rem', 
          margin: '0 0 16px 0', 
          color: 'white',
          textAlign: 'center'
        }}>
          Hotel WC - Sistema de Reservas
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '32px', 
          color: '#e0e7ff',
          textAlign: 'center',
          maxWidth: '700px'
        }}>
          Cálculo automático de tarifas con IVA y descuentos según ocupación
        </p>
        
        {/* Video de YouTube */}
        <div style={{
          width: '100%',
          maxWidth: '700px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0
        }}>
          <iframe 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            src="https://www.youtube.com/embed/4_lzrprot5U"
            title="Video Hotel WC"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

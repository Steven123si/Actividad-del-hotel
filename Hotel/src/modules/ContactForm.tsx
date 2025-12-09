import React from 'react'

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    email: '',
    mensaje: ''
  })
  const [enviado, setEnviado] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setEnviado(true)
    setTimeout(() => {
      setEnviado(false)
      setFormData({ nombre: '', email: '', mensaje: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{ textAlign: 'center' }}>Formulario de Contacto</h2>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: '24px' }}>
        ¿Tienes alguna pregunta? Contáctanos
      </p>
      
      {enviado ? (
        <div style={{ 
          padding: '20px', 
          background: '#d4edda', 
          borderRadius: '8px', 
          color: '#155724', 
          border: '2px solid #28a745',
          textAlign: 'center',
          width: '100%'
        }}>
          Mensaje enviado correctamente
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ 
          display: 'grid', 
          gap: '16px', 
          width: '100%'
        }}>
          <div>
            <label htmlFor="nombre">Nombre completo *</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
            />
          </div>
          
          <div>
            <label htmlFor="email">Correo electrónico *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
            />
          </div>
          
          <div>
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              style={{ 
                width: '100%', 
                padding: '8px 12px', 
                fontSize: '16px',
                fontFamily: 'inherit',
                borderRadius: '6px',
                border: '1px solid #ddd'
              }}
            />
          </div>
          
          <button type="submit" style={{ width: '100%' }}>
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  )
}

import { Navbar } from './Navbar'
import { HeroSection } from './HeroSection'
import { ImageCarousel } from './ImageCarousel'
import { HotelDemo } from './HotelDemo'
import { ContactForm } from './ContactForm'
import { Footer } from './Footer'

export function App(){
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <header style={{ textAlign: 'center' }}>
        <h1>Sistema de Reservas - Hotel WC</h1>
        <p>Cálculo integral de tarifas con IVA y descuentos</p>
      </header>
      
      {/* Carrusel de imágenes - MÁS ANCHO */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 16px' }}>
        <ImageCarousel />
      </div>
      
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '24px 16px' }}>
        <section id="hotel" className="card" style={{ maxWidth: '100%', margin: '0 auto 24px' }}>
          <HotelDemo />
        </section>
        
        <section id="contacto" className="card" style={{ maxWidth: '100%', margin: '0 auto' }}>
          <ContactForm />
        </section>
      </main>
      
      <Footer />
    </>
  )
}

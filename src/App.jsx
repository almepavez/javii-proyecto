import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Gallery from './components/Gallery'
import OrderSection from './components/OrderSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ProductPage from './components/Productpage'
import Cart from './components/Cart'
import Calendario from './components/Calendario'

// Sube al tope al cambiar de ruta (excepto home con ancla)
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/') return
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Gallery />
      <Calendario />
      <OrderSection />
      <Footer />
      <WhatsAppButton />
      <Cart />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producto/:id" element={
          <>
            <Navbar />
            <ProductPage />
            <Footer />
            <WhatsAppButton />
            <Cart />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}
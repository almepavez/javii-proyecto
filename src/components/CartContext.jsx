import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (producto, cantidad = 1) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === producto.id)
      if (exists) {
        return prev.map(i => i.id === producto.id ? { ...i, cantidad: i.cantidad + cantidad } : i)
      }
      return [...prev, { ...producto, cantidad }]
    })
    setIsOpen(true)
  }

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id))

  const updateCantidad = (id, cantidad) => {
    if (cantidad <= 0) return removeItem(id)
    setItems(prev => prev.map(i => i.id === id ? { ...i, cantidad } : i))
  }

  const clearCart = () => setItems([])

  const total = items.reduce((acc, i) => {
    const precio = i.precio_unidad || i.precio_paquete || 0
    return acc + precio * i.cantidad
  }, 0)

  const totalItems = items.reduce((acc, i) => acc + i.cantidad, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateCantidad, clearCart, total, totalItems, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
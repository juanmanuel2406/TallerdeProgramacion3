import { useState } from 'react'

const productosIniciales = [
  { id: 1, nombre: 'Arroz', categoria: 'Alimentos', precio: 120 },
  { id: 2, nombre: 'Zapatillas', categoria: 'Calzados', precio: 120000 },
  { id: 3, nombre: 'Zapatos', categoria: 'Calzados', precio: 100000 },
  { id: 4, nombre: 'Martillo', categoria: 'Herramientas', precio: 50000 },
  { id: 5, nombre: 'Destornillador', categoria: 'Herramientas', precio: 30000 },
]

function ArraysEjemplos() {
  const [productos, setProductos] = useState(productosIniciales)
  const [busqueda, setBusqueda] = useState('')

  const listaCompleta = productos.map((producto) => (
    <li key={producto.id}>
      {producto.nombre} - {producto.categoria} - ${producto.precio}
    </li>
  ))

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id))
  }

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  const listaFiltrada = productosFiltrados.map((producto) => (
    <li key={producto.id}>
      {producto.nombre} - {producto.categoria} - ${producto.precio}
    </li>
  ))

  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Manejo de Arrays: map y filter</h1>
      <h2 className='text-2xl font-semibold mt-6 mb-3'>map - renderizar una lista completa</h2>
      <ul className='list-disc list-inside'>{listaCompleta}</ul>
      <h2 className='text-2xl font-semibold mt-6 mb-3'>filter - Elimina un elemento</h2>
      <ul className='list-disc list-inside'>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre}
            <button className='ml-4 bg-red-500 text-white px-2 py-1 rounded' onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h2 className='text-2xl font-semibold mt-6 mb-3'>filter - Búsqueda</h2>
      <input
        type='text'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar producto...'
        className='border p-2 mb-3 w-full'
      />
      <ul className='list-disc list-inside'>{listaFiltrada}</ul>
    </div>
  )
}
export default ArraysEjemplos

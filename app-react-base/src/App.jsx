import { Routes, Route } from 'react-router-dom'
import Contador from './Components/Contador'
import Saludo from './Components/Saludo'
import Navbar from './Components/Navbar'
import Acerca from './Components/Acerca'

function App() {

  const user = {
    nombre: 'Juan',
    apellido: 'Goncalves'
  }
  return (
    <>
      <Navbar />
      <div className="p-8 flex justify-center">
        <Routes>
          <Route path="/" element={<Saludo usuario={user} />} />
          <Route path="/contador" element={<Contador salto={1} />} />
          <Route path="/contador/:valorInicial" element={<Contador salto={1} />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </div>
    </>
  )
}

export default App
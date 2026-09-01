import Contador from './Components/Contador'
import Saludo from './Components/Saludo'  

function App() {

  const user = {
    nombre: 'Juan',
    apellido: 'Goncalves'
  }
  return (
    <>
      <Saludo usuario={user} />
      <Contador salto={1} />
    </>
  )
}

export default App
import Boton from "./Boton"
import { useState } from "react"
import { useParams } from 'react-router-dom'

function Contador(props) {
    const { valorInicial } = useParams()
    console.log(`Valor inicial: ${valorInicial}`)
    const [contador, setContador] = useState(Number.parseInt(valorInicial) || 0)

    const incrementar = () => setContador(contador + props.salto)
    const decrementar = () => setContador(contador - props.salto)
    const resetear = () => setContador(0)

    return(
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl shadow-blue-500/30 px-10 py-8 text-center transition-transform duration-300 hover:scale-105">
      <h1 className="text-2xl font-bold mb-4 animate-pulse">Contador: {contador}</h1>

      <div>
        <Boton label='Incrementar' onClick={incrementar}></Boton>
        <Boton label ='Decrementar' onClick={decrementar}></Boton>
        {contador !== 0 && <Boton label="Reiniciar" onClick={resetear} />}
      </div>
    </div>
    )
}

export default Contador
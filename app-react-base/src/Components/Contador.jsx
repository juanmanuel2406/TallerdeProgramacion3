import Boton from "./Boton"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useContadorStore from "../store/useContadorStore"

function Contador() {
  const { valorInicial } = useParams()
  const { contador, incrementar, decrementar, resetear, setContador } = useContadorStore()

  useEffect(() => {
    if (valorInicial !== undefined && !isNaN(Number(valorInicial))) {
      setContador(Number(valorInicial))
    }
  }, [valorInicial, setContador])

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl shadow-blue-500/30 px-10 py-8 text-center transition-transform duration-300 hover:scale-105">
      <h1 className="text-2xl font-bold mb-4 animate-pulse">Contador: {contador}</h1>

      <div>
        <Boton label="Incrementar" onClick={incrementar} />
        <Boton label="Decrementar" onClick={decrementar} />
        {contador !== 0 && <Boton label="Reiniciar" onClick={resetear} />}
      </div>
    </div>
  )
}

export default Contador
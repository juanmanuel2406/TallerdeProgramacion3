import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Boton from './Boton'

function Saludo(props) {
    const navigate = useNavigate()
    const [valor, setValor] = useState(0)

    const handleValor = (e) => {
        setValor(Number.parseInt(e.target.value) || 0)
    }

    const irAContador = () => {
        navigate(`/contador/${valor}`)
    }

    return (
        <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl shadow-blue-500/40 px-10 py-8 text-center border border-blue-200/60 animate-entrada transition-all duration-300 hover:scale-105 hover:shadow-blue-500/70 hover:-rotate-1">
            <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 bg-clip-text text-transparent animate-pulse">Hola, {props.usuario.nombre} {props.usuario.apellido}!</h1>
            <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-fuchsia-500 to-blue-600 max-w-sm mt-2 tracking-wide">Bienvenido a nuestra aplicación.</p>
            <div>
                <input
                    type="number"
                    value={valor}
                    onChange={handleValor}
                    placeholder="Valor inicial del contador"
                    className="mt-4 w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                />
            </div>
            <div className="mt-4">
                <Boton label="Ir a Contador" onClick={irAContador} />
            </div>
        </div>
    )
}
export default Saludo
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Boton from './Boton'

function ConfigContador(props) {

    const navigate = useNavigate()
    const [valor, setValor] = useState(0)

    const handleValor = (e) => {
        setValor(Number.parseInt(e.target.value) || 0)
    }

    const irAContador = () => {
        navigate(`/contador/${valor}`)
    }
    
    useEffect(() => {
        console.log("Componente Montado")

        return () => {
            console.log("Componente Desmontado")
        }
    }, [])

    useEffect(() => {
        console.log("Componente modificado: ", valor)
    }, [valor])

    return (
        <>
                <input
                    type="number"
                    value={valor}
                    onChange={handleValor}
                    placeholder="Valor inicial del contador"
                    className="mt-4 wb-4 w-full px-4 py-3 rounded-lg borde-2 border-gray-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 trasition:-all duration-200 text-gary-700 placeholder-gray-400text-center"
                />
            
            <div className="mt-4">
                <Boton label="Ir a Contador" onClick={irAContador} />
            </div>
        </>
    )
}
export default ConfigContador
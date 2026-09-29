import { useEffect, useState } from "react"

function UsuariosConFetch() {

    const [usuarios, setUsuarios] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        
        const obtenerUsuarios = async() => {
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")  
                if (!respuesta.ok) {
                    throw new Error(`Error HTTP: ${respuesta.status}`)
                }
                const datos = await respuesta.json()
                await sleep(1500)
                setUsuarios(datos)
                setCargando(false)
            } catch (error) {
                setError(error.message)
                setCargando(false)
            }
        }
        obtenerUsuarios()
    }, 
    [])

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    if (cargando) {
        return (
            <div>
                Cargando usuarios...
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Error: {error}
            </div>
        )
    }

    return (
        <>
            <div>
                <h2>Lista de Usuarios (con Fetch)</h2>
                <ul>
                    {usuarios.map((usuarios) => (
                        <li key={usuarios.id}>
                            <h3>{usuarios.name}</h3>
                            <p>{usuarios.email}</p>
                            <p>{usuarios.username}</p>
                            <p>{usuarios.company.name}</p>
                            <p>----------------------</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default UsuariosConFetch
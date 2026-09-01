import { useState } from "react"
import Boton from "./Components/Boton"
import Calculadora from "./Components/Calculadora"

function App() {
    const [modo, setModo] = useState("tranqui")

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Calculadora</h1>
            <div className="flex gap-3">
                <Boton label="Tranqui" onClick={() => setModo("tranqui")} />
                <Boton label="Científica" onClick={() => setModo("cientifica")} />
            </div>
            {modo === "tranqui" && <Calculadora modo="tranqui" />}
            {modo === "cientifica" && <Calculadora modo="cientifica" />}
        </div>
    )
}

export default App
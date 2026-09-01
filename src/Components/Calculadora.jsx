import { useEffect, useState } from "react"
import Boton from "./Boton"
import Pantalla from "./Pantalla"

function Calculadora(props) {
    const [valor, setValor] = useState("0")
    const [primerValor, setPrimerValor] = useState(null)
    const [operador, setOperador] = useState(null)
    const [nuevoNumero, setNuevoNumero] = useState(false)

    const opera = (a, b, op) => {
        if (op === "+") return a + b
        if (op === "-") return a - b
        if (op === "*") return a * b
        if (op === "/") return b !== 0 ? a / b : "Error"
        return b
    }

    const agregarDigito = (digito) => {
        if (nuevoNumero || valor === "Error") {
            setValor(digito === "." ? "0." : digito)
            setNuevoNumero(false)
        } else if (digito === "." && valor.includes(".")) {
            // ya tiene punto, no hace nada
        } else {
            setValor(valor + digito)
        }
    }

    const elegirOperador = (op) => {
        if (primerValor === null) {
            setPrimerValor(parseFloat(valor))
        } else {
            const resultado = opera(primerValor, parseFloat(valor), operador)
            setValor(String(resultado))
            setPrimerValor(resultado === "Error" ? null : resultado)
        }
        setOperador(op)
        setNuevoNumero(true)
    }

    const calcular = () => {
        if (primerValor === null || operador === null) return
        const resultado = opera(primerValor, parseFloat(valor), operador)
        setValor(String(resultado))
        setPrimerValor(null)
        setOperador(null)
        setNuevoNumero(true)
    }

    const limpiar = () => {
        setValor("0")
        setPrimerValor(null)
        setOperador(null)
        setNuevoNumero(false)
    }

    const raiz = () => { setValor(String(Math.sqrt(parseFloat(valor)))); setNuevoNumero(true) }
    const cuadrado = () => { setValor(String(Math.pow(parseFloat(valor), 2))); setNuevoNumero(true) }
    const porcentaje = () => { setValor(String(parseFloat(valor) / 100)); setNuevoNumero(true) }
    const cambiarSigno = () => setValor(String(parseFloat(valor) * -1))
    const agregarPi = () => { setValor(String(Math.PI)); setNuevoNumero(true) }

    const manejarTecla = (evento) => {
        const tecla = evento.key
        if (tecla >= "0" && tecla <= "9") agregarDigito(tecla)
        else if (tecla === ".") agregarDigito(".")
        else if (tecla === "+") elegirOperador("+")
        else if (tecla === "-") elegirOperador("-")
        else if (tecla === "*") elegirOperador("*")
        else if (tecla === "/") {
            evento.preventDefault()
            elegirOperador("/")
        }
        else if (tecla === "Enter" || tecla === "=") calcular()
        else if (tecla === "Escape" || tecla.toLowerCase() === "c") limpiar()
    }

    useEffect(() => {
        window.addEventListener("keydown", manejarTecla)
        return () => window.removeEventListener("keydown", manejarTecla)
    }, [valor, primerValor, operador, nuevoNumero])

    let teclas = []
    if (props.modo === "tranqui") {
        teclas = [
            { label: "C", accion: limpiar },
            { label: "/", accion: () => elegirOperador("/") },
            { label: "*", accion: () => elegirOperador("*") },
            { label: "-", accion: () => elegirOperador("-") },
            { label: "7", accion: () => agregarDigito("7") },
            { label: "8", accion: () => agregarDigito("8") },
            { label: "9", accion: () => agregarDigito("9") },
            { label: "+", accion: () => elegirOperador("+") },
            { label: "4", accion: () => agregarDigito("4") },
            { label: "5", accion: () => agregarDigito("5") },
            { label: "6", accion: () => agregarDigito("6") },
            { label: ".", accion: () => agregarDigito(".") },
            { label: "1", accion: () => agregarDigito("1") },
            { label: "2", accion: () => agregarDigito("2") },
            { label: "3", accion: () => agregarDigito("3") },
            { label: "=", accion: calcular },
        ]
    } else {
        teclas = [
            { label: "√", accion: raiz },
            { label: "x²", accion: cuadrado },
            { label: "%", accion: porcentaje },
            { label: "±", accion: cambiarSigno },
            { label: "C", accion: limpiar },
            { label: "π", accion: agregarPi },
            { label: "/", accion: () => elegirOperador("/") },
            { label: "*", accion: () => elegirOperador("*") },
            { label: "7", accion: () => agregarDigito("7") },
            { label: "8", accion: () => agregarDigito("8") },
            { label: "9", accion: () => agregarDigito("9") },
            { label: "-", accion: () => elegirOperador("-") },
            { label: "4", accion: () => agregarDigito("4") },
            { label: "5", accion: () => agregarDigito("5") },
            { label: "6", accion: () => agregarDigito("6") },
            { label: "+", accion: () => elegirOperador("+") },
            { label: "1", accion: () => agregarDigito("1") },
            { label: "2", accion: () => agregarDigito("2") },
            { label: "3", accion: () => agregarDigito("3") },
            { label: ".", accion: () => agregarDigito(".") },
        ]
    }

    return (
        <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-2xl shadow-blue-500/40 px-8 py-6 border border-blue-200/60 animate-entrada">
            <Pantalla valor={valor} />
            <div className="grid grid-cols-4 gap-2">
                {teclas.map((tecla) => (
                    <Boton key={tecla.label} label={tecla.label} onClick={tecla.accion} />
                ))}
                {props.modo === "tranqui" ? (
                    <div className="col-span-4">
                        <Boton label="0" onClick={() => agregarDigito("0")} />
                    </div>
                ) : (
                    <>
                        <div className="col-span-3">
                            <Boton label="0" onClick={() => agregarDigito("0")} />
                        </div>
                        <Boton label="=" onClick={calcular} />
                    </>
                )}
            </div>
        </div>
    )
}

export default Calculadora
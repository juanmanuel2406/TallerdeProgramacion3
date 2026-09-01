function Pantalla(props) {
    return (
        <div className="bg-white rounded-xl shadow-inner px-6 py-4 mb-6 text-right border border-blue-100">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 break-all">{props.valor}</span>
        </div>
    )
}

export default Pantalla
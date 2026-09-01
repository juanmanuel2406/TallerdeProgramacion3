function Boton({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full relative overflow-hidden group bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white font-semibold text-xl px-4 py-3 rounded-xl cursor-pointer shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400/40"
        >
            <span className="relative z-10">{label}</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </button>
    )
}

export default Boton
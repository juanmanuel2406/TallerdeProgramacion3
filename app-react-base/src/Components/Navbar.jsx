import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-lg shadow-blue-500/30 px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <ul className="flex items-center gap-6">
          <li>
            <Link
              to="/"
              className="text-white font-semibold tracking-wide transition-colors duration-300 hover:text-blue-200"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/contador"
              className="text-white font-semibold tracking-wide transition-colors duration-300 hover:text-blue-200"
            >
              Contador
            </Link>
          </li>
          <li>
            <Link
              to="/acerca"
              className="text-white font-semibold tracking-wide transition-colors duration-300 hover:text-blue-200"
            >
              Acerca de
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
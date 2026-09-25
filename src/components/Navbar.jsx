import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaHeadset } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Cobertura', path: '/cobertura' },
    { name: 'Tarifas', path: '/tarifas' },
    { name: 'Contacto', path: '/contacto' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-primary-dark transition-colors duration-300">
              <FaHeadset className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">TechAssist <span className="text-accent">24/7</span></h1>
              <p className="text-xs text-gray-500 -mt-1">Soporte técnico profesional</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+51959618226"
              className="ml-4 bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Llamar Ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary transition-colors p-2"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 my-1 ${
                  isActive(link.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+51959618226"
              className="block mt-3 bg-accent text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors"
            >
              Llamar Ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

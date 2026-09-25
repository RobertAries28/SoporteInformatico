import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaHeadset } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <FaHeadset className="text-accent text-3xl" />
              <div>
                <h3 className="text-xl font-bold">TechAssist <span className="text-accent">24/7</span></h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Soporte técnico profesional disponible cuando lo necesitas. Remoto y presencial.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-accent transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-accent transition-colors">Servicios</Link></li>
              <li><Link to="/cobertura" className="text-gray-400 hover:text-accent transition-colors">Cobertura</Link></li>
              <li><Link to="/tarifas" className="text-gray-400 hover:text-accent transition-colors">Tarifas</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-accent transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Soporte Remoto</li>
              <li>Soporte Presencial</li>
              <li>Mantenimiento PC</li>
              <li>Instalación Software</li>
              <li>Eliminación de Virus</li>
              <li>Recuperación de Datos</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="tel:+51917724327" className="flex items-center space-x-2 text-gray-400 hover:text-accent transition-colors">
                <FaPhone className="text-accent" />
                <span>+51 917 724 327</span>
              </a>
              <a href="mailto:soporte@techassist247.com" className="flex items-center space-x-2 text-gray-400 hover:text-accent transition-colors">
                <FaEnvelope className="text-accent" />
                <span>soporte@techassist247.com</span>
              </a>
              <a href="https://wa.me/51917724327" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-accent transition-colors">
                <FaWhatsapp className="text-accent" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TechAssist 24/7. Todos los derechos reservados.</p>
          <p className="mt-2">Desarrollado con ❤️ por Daniel Escalante</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

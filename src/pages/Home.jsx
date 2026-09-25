import { Link } from 'react-router-dom'
import { FaLaptop, FaTools, FaShieldAlt, FaHeadset, FaMobileAlt, FaServer, FaClock, FaCheckCircle, FaRocket, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Home = () => {
  const services = [
    {
      icon: <FaHeadset className="text-4xl" />,
      title: 'Soporte Remoto',
      description: 'Asistencia inmediata vía AnyDesk o TeamViewer. Resolvemos tu problema sin salir de casa.',
      color: 'bg-blue-500'
    },
    {
      icon: <FaLaptop className="text-4xl" />,
      title: 'Soporte Presencial',
      description: 'Visita a domicilio u oficina. Técnicos certificados en tu ubicación.',
      color: 'bg-green-500'
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: 'Mantenimiento',
      description: 'Limpieza, optimización y actualización de tu PC o laptop.',
      color: 'bg-purple-500'
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: 'Configuración',
      description: 'Instalación de Windows, Office, programas y configuración de dispositivos.',
      color: 'bg-orange-500'
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: 'Seguridad',
      description: 'Eliminación de virus, instalación de antivirus y protección de datos.',
      color: 'bg-red-500'
    },
    {
      icon: <FaServer className="text-4xl" />,
      title: 'Reparación',
      description: 'Recuperación de datos, cambio de componentes y reparación de hardware.',
      color: 'bg-indigo-500'
    }
  ]

  const features = [
    { icon: <FaClock />, text: 'Disponibilidad 24/7' },
    { icon: <FaCheckCircle />, text: 'Técnicos certificados' },
    { icon: <FaRocket />, text: 'Respuesta rápida' },
  ]

  const steps = [
    { number: '01', title: 'Contacta', description: 'Llámanos, escríbenos por WhatsApp o completa el formulario' },
    { number: '02', title: 'Diagnóstico', description: 'Evaluamos tu problema de forma remota o presencial' },
    { number: '03', title: 'Solución', description: 'Resolvemos tu problema de manera rápida y efectiva' }
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Soporte Técnico <span className="text-accent">Profesional</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Cuando lo necesitas
              </p>
              <p className="text-lg mb-8 text-blue-200">
                Asistencia remota y presencial las 24 horas del día, los 7 días de la semana. Resolvemos tus problemas técnicos de forma rápida y efectiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto" className="btn-accent text-center">
                  Solicitar Soporte Ahora
                </Link>
                <a href="https://wa.me/51959618226" target="_blank" rel="noopener noreferrer" className="btn-outline bg-green-500 text-white border-green-500 hover:bg-green-600 text-center">
                  <FaWhatsapp className="inline mr-2" />
                  WhatsApp
                </a>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="text-accent text-3xl mb-2">{feature.icon}</div>
                    <p className="text-sm text-blue-100">{feature.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600"
                  alt="Soporte técnico"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle">Soluciones completas para todas tus necesidades técnicas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <div className={`${service.color} text-white w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicios" className="btn-primary">
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Urgente */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Necesitas Ayuda AHORA?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nuestro equipo está disponible las 24 horas para asistirte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/51959618226" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <FaWhatsapp className="inline mr-2 text-2xl" />
              WhatsApp Directo
            </a>
            <a href="tel:+51959618226" className="bg-white hover:bg-gray-100 text-accent px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <FaPhone className="inline mr-2" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Cómo Trabajamos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Cómo Trabajamos</h2>
            <p className="section-subtitle">Proceso simple y efectivo en 3 pasos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Descargas Software Remoto */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Soporte Remoto Inmediato</h2>
          <p className="section-subtitle mb-12">Descarga el software y conéctate con nuestros técnicos</p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://anydesk.com/es/downloads"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-red-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                A
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">AnyDesk</h3>
              <p className="text-gray-600 mb-4">Software de acceso remoto rápido y seguro</p>
              <span className="text-primary font-semibold">Descargar Ahora →</span>
            </a>

            <a
              href="https://www.teamviewer.com/es/descarga/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                TV
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">TeamViewer</h3>
              <p className="text-gray-600 mb-4">Conexión remota confiable y profesional</p>
              <span className="text-primary font-semibold">Descargar Ahora →</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

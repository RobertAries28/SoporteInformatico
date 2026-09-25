import { motion } from 'framer-motion'
import { FaHeadset, FaLaptop, FaTools, FaMobileAlt, FaShieldAlt, FaServer, FaNetworkWired, FaPrint, FaHdd, FaWifi } from 'react-icons/fa'

const Services = () => {
  const serviceCategories = [
    {
      title: 'Soporte Remoto',
      icon: <FaHeadset className="text-5xl" />,
      color: 'bg-blue-500',
      services: [
        'Resolución de problemas de Windows',
        'Configuración de programas y software',
        'Limpieza y optimización del sistema',
        'Eliminación de virus y malware',
        'Instalación remota de software',
        'Configuración de correo electrónico',
        'Asistencia con aplicaciones Office',
        'Soporte técnico en tiempo real'
      ],
      response: 'Inmediata',
      price: 'Desde S/. 50'
    },
    {
      title: 'Soporte Presencial',
      icon: <FaLaptop className="text-5xl" />,
      color: 'bg-green-500',
      services: [
        'Visita a domicilio u oficina',
        'Instalación física de equipos',
        'Configuración de redes locales',
        'Instalación de periféricos',
        'Mantenimiento preventivo',
        'Diagnóstico técnico presencial',
        'Backup de información',
        'Capacitación de usuarios'
      ],
      response: '2-4 horas',
      price: 'Desde S/. 100'
    },
    {
      title: 'Mantenimiento Preventivo',
      icon: <FaTools className="text-5xl" />,
      color: 'bg-purple-500',
      services: [
        'Limpieza interna de componentes',
        'Cambio de pasta térmica',
        'Actualización de drivers',
        'Optimización de disco duro',
        'Eliminación de archivos temporales',
        'Verificación de hardware',
        'Actualización de Windows',
        'Informe técnico detallado'
      ],
      response: '24 horas',
      price: 'S/. 80 - S/. 120'
    },
    {
      title: 'Configuración de Dispositivos',
      icon: <FaMobileAlt className="text-5xl" />,
      color: 'bg-orange-500',
      services: [
        'Instalación de Windows 10/11',
        'Instalación de Microsoft Office',
        'Configuración de impresoras',
        'Instalación de programas específicos',
        'Configuración de cuentas de correo',
        'Sincronización de dispositivos',
        'Configuración de navegadores',
        'Instalación de licencias'
      ],
      response: 'Inmediata a 24h',
      price: 'Desde S/. 60'
    },
    {
      title: 'Seguridad Informática',
      icon: <FaShieldAlt className="text-5xl" />,
      color: 'bg-red-500',
      services: [
        'Eliminación de virus y troyanos',
        'Instalación de antivirus profesional',
        'Configuración de firewall',
        'Limpieza profunda del sistema',
        'Protección contra ransomware',
        'Configuración de respaldos automáticos',
        'Protección de datos sensibles',
        'Análisis de seguridad completo'
      ],
      response: 'Urgente',
      price: 'Desde S/. 80'
    },
    {
      title: 'Reparación y Recuperación',
      icon: <FaServer className="text-5xl" />,
      color: 'bg-indigo-500',
      services: [
        'Recuperación de datos perdidos',
        'Reparación de discos duros',
        'Cambio de pantallas de laptop',
        'Reemplazo de teclados',
        'Cambio de baterías',
        'Reparación de fuentes de poder',
        'Actualización de RAM',
        'Cambio de discos por SSD'
      ],
      response: '1-3 días',
      price: 'Según diagnóstico'
    },
    {
      title: 'Redes y Conectividad',
      icon: <FaNetworkWired className="text-5xl" />,
      color: 'bg-teal-500',
      services: [
        'Instalación de redes cableadas',
        'Configuración de WiFi',
        'Compartir archivos e impresoras',
        'Configuración de routers',
        'Solución de problemas de conexión',
        'Optimización de velocidad',
        'Configuración de VPN',
        'Seguridad de red'
      ],
      response: '24-48 horas',
      price: 'Desde S/. 100'
    },
    {
      title: 'Impresoras y Periféricos',
      icon: <FaPrint className="text-5xl" />,
      color: 'bg-pink-500',
      services: [
        'Instalación de impresoras',
        'Configuración de escáneres',
        'Compartir impresoras en red',
        'Solución de problemas de impresión',
        'Configuración de multifuncionales',
        'Instalación de cámaras web',
        'Configuración de periféricos USB',
        'Mantenimiento de impresoras'
      ],
      response: 'Inmediata a 24h',
      price: 'Desde S/. 50'
    }
  ]

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Nuestros Servicios
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones técnicas completas para todas tus necesidades. Servicio profesional garantizado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                {/* Icon Section */}
                <div className={`${category.color} text-white p-8 md:w-1/4 flex flex-col items-center justify-center`}>
                  <div className="mb-4">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-center mb-4">{category.title}</h2>
                  <div className="space-y-2 text-center">
                    <div className="bg-white/20 rounded-lg px-4 py-2">
                      <p className="text-sm font-semibold">Tiempo de respuesta</p>
                      <p className="text-lg">{category.response}</p>
                    </div>
                    <div className="bg-white/20 rounded-lg px-4 py-2">
                      <p className="text-sm font-semibold">Precio</p>
                      <p className="text-lg">{category.price}</p>
                    </div>
                  </div>
                </div>

                {/* Services List */}
                <div className="p-8 md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Incluye:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className={`${category.color} min-w-2 w-2 h-2 rounded-full mt-2`}></div>
                        <p className="text-gray-700">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctanos y cuéntanos tu problema. Tenemos solución para todo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+51917724327" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Llamar: +51 917 724 327
            </a>
            <a href="https://wa.me/51917724327" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services

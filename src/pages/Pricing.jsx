import { motion } from 'framer-motion'
import { FaCheck, FaStar, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const plans = [
    {
      name: 'Soporte Básico',
      price: '50',
      description: 'Ideal para problemas sencillos y soporte remoto',
      features: [
        'Soporte remoto (AnyDesk/TeamViewer)',
        'Duración: hasta 1 hora',
        'Resolución de problemas comunes',
        'Configuración básica de software',
        'Eliminación de virus simple',
        'Asesoría técnica'
      ],
      color: 'border-gray-300',
      popular: false
    },
    {
      name: 'Soporte Estándar',
      price: '100',
      description: 'Servicio presencial con mantenimiento incluido',
      features: [
        'Visita a domicilio/oficina',
        'Duración: hasta 2 horas',
        'Mantenimiento preventivo',
        'Instalación de programas',
        'Configuración de periféricos',
        'Limpieza física del equipo',
        'Backup de información importante',
        'Informe técnico'
      ],
      color: 'border-primary',
      popular: true
    },
    {
      name: 'Soporte Premium',
      price: '200',
      description: 'Servicio completo con garantía extendida',
      features: [
        'Servicio presencial ilimitado (mismo día)',
        'Duración: hasta 4 horas',
        'Mantenimiento completo',
        'Instalación de Windows + programas',
        'Configuración avanzada',
        'Actualización de componentes',
        'Optimización total del sistema',
        'Garantía de 30 días',
        'Soporte remoto gratuito (1 mes)'
      ],
      color: 'border-accent',
      popular: false
    }
  ]

  const additionalServices = [
    { service: 'Recuperación de datos', price: 'Desde S/. 150' },
    { service: 'Instalación de Windows', price: 'S/. 80' },
    { service: 'Instalación de Office', price: 'S/. 40' },
    { service: 'Cambio de pantalla de laptop', price: 'Desde S/. 300' },
    { service: 'Cambio de teclado', price: 'Desde S/. 80' },
    { service: 'Cambio de disco duro a SSD', price: 'Desde S/. 200' },
    { service: 'Expansión de RAM', price: 'Desde S/. 150' },
    { service: 'Configuración de red empresarial', price: 'Desde S/. 250' },
    { service: 'Mantenimiento de impresoras', price: 'S/. 60' },
    { service: 'Eliminación de virus avanzada', price: 'S/. 100' }
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
            Tarifas y Precios
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precios transparentes y competitivos. Sin costos ocultos.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${plan.color} ${
                plan.popular ? 'transform scale-105 shadow-2xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 font-semibold flex items-center justify-center">
                  <FaStar className="mr-2" />
                  MÁS POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">S/. {plan.price}</span>
                  <span className="text-gray-500 ml-2">/ servicio</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contacto"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  Solicitar Servicio
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Servicios Adicionales</h2>
          <p className="text-gray-600 text-center mb-8">Precios de servicios específicos</p>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {additionalServices.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-700 font-medium">{item.service}</span>
                <span className="text-primary font-bold">{item.price}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            * Los precios "Desde" pueden variar según la marca, modelo y disponibilidad de repuestos
          </p>
        </motion.div>

        {/* Important Notes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-800 mb-2 text-lg">💰 Sin Costos Ocultos</h3>
            <p className="text-blue-700 text-sm">
              El precio que ves es el que pagas. No cobramos por desplazamiento en zonas de cobertura.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <h3 className="font-bold text-green-800 mb-2 text-lg">✅ Garantía Incluida</h3>
            <p className="text-green-700 text-sm">
              Todos nuestros servicios incluyen garantía. Si el problema persiste, lo revisamos sin costo adicional.
            </p>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
            <h3 className="font-bold text-orange-800 mb-2 text-lg">📝 Cotización Gratuita</h3>
            <p className="text-orange-700 text-sm">
              ¿No estás seguro qué servicio necesitas? Contáctanos para una evaluación y cotización sin compromiso.
            </p>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">¿Necesitas un presupuesto personalizado?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Llámanos y cuéntanos tu caso. Te daremos la mejor solución al mejor precio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+51917724327" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <FaPhone className="mr-2" />
              Llamar: +51 917 724 327
            </a>
            <a href="https://wa.me/51917724327" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Cotizar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing

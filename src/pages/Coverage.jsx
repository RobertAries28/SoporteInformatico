import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'

const Coverage = () => {
  const zones = [
    {
      name: 'Lima Metropolitana',
      districts: [
        'Miraflores', 'San Isidro', 'Surco', 'La Molina', 'San Borja',
        'Magdalena', 'Jesús María', 'Lince', 'Pueblo Libre', 'Barranco',
        'Chorrillos', 'San Miguel', 'Cercado de Lima'
      ],
      response: 'Mismo día',
      color: 'bg-green-500'
    },
    {
      name: 'Lima Norte',
      districts: [
        'Los Olivos', 'San Martín de Porres', 'Independencia', 'Comas',
        'Puente Piedra', 'Carabayllo', 'Santa Rosa', 'Ancón'
      ],
      response: '24 horas',
      color: 'bg-blue-500'
    },
    {
      name: 'Lima Sur',
      districts: [
        'Villa El Salvador', 'Villa María del Triunfo', 'San Juan de Miraflores',
        'Lurín', 'Pachacamac', 'Punta Hermosa', 'Punta Negra'
      ],
      response: '24 horas',
      color: 'bg-purple-500'
    },
    {
      name: 'Lima Este',
      districts: [
        'Ate', 'Santa Anita', 'El Agustino', 'San Luis',
        'La Victoria', 'Chaclacayo', 'Lurigancho', 'Cieneguilla'
      ],
      response: '24 horas',
      color: 'bg-orange-500'
    },
    {
      name: 'Callao',
      districts: [
        'Callao', 'Bellavista', 'La Perla', 'La Punta',
        'Carmen de la Legua', 'Ventanilla'
      ],
      response: 'Mismo día',
      color: 'bg-indigo-500'
    }
  ]

  const schedules = [
    { day: 'Lunes a Viernes', hours: '8:00 AM - 10:00 PM', type: 'normal' },
    { day: 'Sábados', hours: '9:00 AM - 9:00 PM', type: 'normal' },
    { day: 'Domingos y Feriados', hours: '10:00 AM - 6:00 PM', type: 'special' },
    { day: 'Soporte Remoto', hours: '24/7 - Todo el año', type: 'highlight' }
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
            Zona de Cobertura
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicio presencial en toda Lima Metropolitana y Callao. Soporte remoto disponible en todo el Perú.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {zones.map((zone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`${zone.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{zone.name}</h3>
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <p className="text-sm mt-2 bg-white/20 rounded px-3 py-1 inline-block">
                  Respuesta: {zone.response}
                </p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-700 mb-3">Distritos:</h4>
                <div className="space-y-1">
                  {zone.districts.map((district, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className={`${zone.color} w-1.5 h-1.5 rounded-full`}></div>
                      <span>{district}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="text-center mb-8">
            <FaClock className="text-5xl text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Horarios de Atención</h2>
            <p className="text-gray-600">Estamos aquí cuando nos necesitas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  schedule.type === 'highlight'
                    ? 'bg-gradient-to-r from-accent to-accent-dark text-white'
                    : schedule.type === 'special'
                    ? 'bg-blue-50 border-2 border-blue-200'
                    : 'bg-gray-50'
                }`}
              >
                <h3 className={`text-lg font-bold mb-2 ${schedule.type === 'highlight' ? 'text-white' : 'text-gray-800'}`}>
                  {schedule.day}
                </h3>
                <p className={`text-xl font-semibold ${schedule.type === 'highlight' ? 'text-white' : 'text-primary'}`}>
                  {schedule.hours}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-800 mb-2 text-lg">📍 Servicio Presencial</h3>
            <p className="text-blue-700">
              Visitamos tu domicilio u oficina en la zona de cobertura. Tiempo de respuesta según distrito.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <h3 className="font-bold text-green-800 mb-2 text-lg">💻 Soporte Remoto</h3>
            <p className="text-green-700">
              Disponible 24/7 para todo el Perú. Resolución inmediata de problemas desde donde estés.
            </p>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
            <h3 className="font-bold text-orange-800 mb-2 text-lg">⚡ Servicio Urgente</h3>
            <p className="text-orange-700">
              Para emergencias, contacta directamente por teléfono o WhatsApp para atención prioritaria.
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
          <h2 className="text-3xl font-bold mb-4">¿Tu distrito no está en la lista?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contáctanos igual. Evaluamos cada caso y buscamos la mejor solución para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+51959618226" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <FaPhone className="mr-2" />
              Llamar: +51 999 999 999
            </a>
            <a href="https://wa.me/51959618226" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Consultar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Coverage

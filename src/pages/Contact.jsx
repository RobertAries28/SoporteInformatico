import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    district: '',
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Aquí puedes integrar EmailJS o tu backend
    // Por ahora simulamos el envío
    setStatus({ type: 'loading', message: 'Enviando...' })

    // Simular envío
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: '✅ Mensaje enviado correctamente. Te contactaremos pronto!'
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        district: '',
        message: ''
      })

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Teléfono',
      value: 'Llamar ahora',
      link: 'tel:+51917724327',
      color: 'bg-blue-500'
    },
    {
      icon: <FaWhatsapp className="text-3xl" />,
      title: 'WhatsApp',
      value: 'Enviar mensaje',
      link: 'https://wa.me/51917724327',
      color: 'bg-green-500'
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      value: 'Escríbenos',
      link: 'mailto:soporte@techassist247.com',
      color: 'bg-red-500'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Horario',
      value: '24/7 Disponible',
      link: null,
      color: 'bg-purple-500'
    }
  ]

  const services = [
    'Soporte Remoto',
    'Soporte Presencial',
    'Mantenimiento',
    'Instalación de Software',
    'Eliminación de Virus',
    'Recuperación de Datos',
    'Reparación de Hardware',
    'Configuración de Red',
    'Otro'
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
            Contáctanos
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos listos para ayudarte. Elige el método que prefieras o completa el formulario.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {method.link ? (
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`${method.color} text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block text-center`}
                >
                  <div className="flex justify-center mb-3">{method.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm">{method.value}</p>
                </a>
              ) : (
                <div className={`${method.color} text-white p-6 rounded-xl shadow-lg text-center`}>
                  <div className="flex justify-center mb-3">{method.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm">{method.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Form and Download Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nombre Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+51 999 999 999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Servicio Requerido *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Distrito</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu distrito"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Describe tu problema o necesidad..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-100 text-green-800' :
                  status.type === 'error' ? 'bg-red-100 text-red-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                {status.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </motion.div>

          {/* Download and Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Urgente */}
            <div className="bg-gradient-to-br from-accent to-accent-dark text-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">¿Es Urgente?</h3>
              <p className="mb-4 text-sm">Si necesitas ayuda inmediata, contáctanos directamente:</p>
              <a
                href="https://wa.me/51959618226"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-center px-6 py-3 rounded-lg font-semibold mb-3 transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="inline mr-2 text-xl" />
                WhatsApp Directo
              </a>
              <a
                href="tel:+51959618226"
                className="block bg-white text-accent text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <FaPhone className="inline mr-2" />
                Llamar Ahora
              </a>
            </div>

            {/* Software Remoto */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Soporte Remoto</h3>
              <p className="text-gray-600 text-sm mb-4">Descarga el software para conexión remota:</p>

              <a
                href="https://anydesk.com/es/downloads"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-500 hover:bg-red-600 text-white text-center px-4 py-3 rounded-lg font-semibold mb-3 transition-colors"
              >
                Descargar AnyDesk
              </a>

              <a
                href="https://www.teamviewer.com/es/descarga/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                Descargar TeamViewer
              </a>
            </div>

            {/* Horarios */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaClock className="text-primary mr-2" />
                Horarios
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lun - Vie:</span>
                  <span className="font-semibold text-gray-800">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábados:</span>
                  <span className="font-semibold text-gray-800">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingos:</span>
                  <span className="font-semibold text-gray-800">10:00 AM - 6:00 PM</span>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-bold">Remoto 24/7:</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">SIEMPRE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

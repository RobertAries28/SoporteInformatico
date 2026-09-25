# 🚀 TechAssist 24/7 - Sitio Web de Soporte Técnico

Sitio web profesional para servicios de soporte técnico. Construido con **React 18**, **Vite 5**, **TailwindCSS** y **Framer Motion**.

---

## 📋 Características

✅ **Diseño Moderno y Responsive** - Se adapta a móviles, tablets y desktop  
✅ **Navegación SPA** - Transiciones suaves con React Router  
✅ **Animaciones Elegantes** - Efectos con Framer Motion  
✅ **Formulario de Contacto** - Listo para integrar con EmailJS o backend  
✅ **Optimizado para SEO** - Meta tags configurados  
✅ **Rápido** - Build optimizado con Vite  
✅ **Fácil de Personalizar** - Colores y contenido centralizados  

---

## 📦 Requisitos

- **Node.js** v16 o superior
- **npm** o **yarn**

---

## 🛠️ Instalación

### Paso 1: Instalar dependencias

```bash
cd techassist247
npm install
```

### Paso 2: Ejecutar en desarrollo

```bash
npm run dev
```

El sitio se abrirá automáticamente en `http://localhost:5173`

### Paso 3: Build para producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`

---

## 📁 Estructura del Proyecto

```
techassist247/
├── public/                # Archivos estáticos
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Navbar.jsx     # Barra de navegación
│   │   └── Footer.jsx     # Pie de página
│   ├── pages/             # Páginas del sitio
│   │   ├── Home.jsx       # Página principal
│   │   ├── Services.jsx   # Servicios detallados
│   │   ├── Coverage.jsx   # Zona de cobertura
│   │   ├── Pricing.jsx    # Tarifas y precios
│   │   └── Contact.jsx    # Formulario de contacto
│   ├── styles/            # Estilos personalizados
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── index.html
├── package.json
├── tailwind.config.js     # Configuración de Tailwind
└── vite.config.js         # Configuración de Vite
```

---

## 🎨 Personalización

### Cambiar Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#2563eb',  // Azul principal
    dark: '#1e40af',
    light: '#3b82f6'
  },
  accent: {
    DEFAULT: '#f97316',  // Naranja de acento
    dark: '#ea580c',
    light: '#fb923c'
  }
}
```

### Cambiar Información de Contacto

Busca y reemplaza en todos los archivos:
- **Teléfono**: `+51999999999` → Tu número
- **Email**: `soporte@techassist247.com` → Tu email
- **WhatsApp**: `51999999999` → Tu número (sin +)

### Cambiar Nombre de la Empresa

Busca y reemplaza:
- `TechAssist 24/7` → Tu nombre de empresa
- `techassist247` → Tu dominio

---

## 🌐 Publicar en Internet (GRATIS)

### Opción 1: Vercel (Recomendado) ⭐

#### Método A: Deploy Automático desde GitHub

1. **Sube tu proyecto a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/techassist247.git
git push -u origin main
```

2. **Ir a Vercel:**
   - Visita: https://vercel.com
   - Crea cuenta (gratis con GitHub)
   - Click en "Add New Project"
   - Selecciona tu repositorio
   - Click "Deploy"

3. **¡Listo!** Tu sitio estará en: `https://techassist247.vercel.app`

#### Método B: Deploy Directo con CLI

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod
```

### Opción 2: Netlify

```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Build del proyecto
npm run build

# 3. Deploy
netlify deploy --prod --dir=dist
```

### Opción 3: GitHub Pages

```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Agregar al package.json:
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://tu-usuario.github.io/techassist247"
}

# 3. Deploy
npm run deploy
```

---

## 🔧 Integrar Formulario de Contacto con EmailJS

### Paso 1: Crear cuenta en EmailJS

1. Ir a: https://www.emailjs.com/
2. Crear cuenta gratuita
3. Crear un servicio de email (Gmail, Outlook, etc.)
4. Crear una plantilla de email
5. Obtener tus credenciales:
   - Service ID
   - Template ID
   - Public Key

### Paso 2: Instalar EmailJS

```bash
npm install @emailjs/browser
```

### Paso 3: Configurar en Contact.jsx

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      },
      'YOUR_PUBLIC_KEY'
    );
    
    setStatus({ type: 'success', message: '✅ Mensaje enviado!' });
  } catch (error) {
    setStatus({ type: 'error', message: '❌ Error al enviar' });
  }
};
```

---

## 🚀 Deploy en Hosting Tradicional

Si tienes hosting pagado (Hostinger, GoDaddy, etc.):

```bash
# 1. Generar build
npm run build

# 2. Subir carpeta "dist" por FTP al directorio:
public_html/

# 3. Configurar .htaccess para React Router:
```

Crear archivo `.htaccess` en `public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🎯 Dominio Personalizado

### En Vercel/Netlify:

1. Comprar dominio (Namecheap, GoDaddy): ~$10/año
2. En tu panel de Vercel/Netlify → Settings → Domains
3. Agregar tu dominio: `www.tusitio.com`
4. Configurar DNS según instrucciones

---

## 📱 Redes Sociales

Agrega tus enlaces en `Footer.jsx`:

```javascript
<a href="https://facebook.com/tu-pagina">
  <FaFacebook />
</a>
<a href="https://instagram.com/tu-cuenta">
  <FaInstagram />
</a>
```

---

## ✅ Checklist Pre-Launch

- [ ] Cambiar número de teléfono
- [ ] Cambiar email de contacto
- [ ] Configurar WhatsApp
- [ ] Personalizar colores de marca
- [ ] Agregar logo (opcional)
- [ ] Configurar EmailJS
- [ ] Probar formulario de contacto
- [ ] Verificar todos los enlaces
- [ ] Probar en móvil
- [ ] Optimizar imágenes
- [ ] Deploy en Vercel/Netlify

---

## 🆘 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### El sitio no carga estilos
```bash
npm run build
```

### Error de conexión en npm install
- Verificar conexión a internet
- Intentar de nuevo
- Usar `npm install --legacy-peer-deps`

---

## 📞 Soporte

**Desarrollador:** Daniel Escalante  
**Email:** escalantegomez01@gmail.com  

---

## 📝 Licencia

Este proyecto fue creado para TechAssist 24/7. 

---

## 🎉 ¡Listo para Producción!

Tu sitio está completo y listo para publicar. Sigue las instrucciones de Vercel para tenerlo online en 5 minutos.

**URL Sugerida:** `techassist247.vercel.app` (gratis)  
**Dominio Propio:** `www.techassist247.com` (~$10/año)

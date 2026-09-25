# 🌐 CÓMO PUBLICAR TU SITIO EN VERCEL (GRATIS)

## ✅ Lo que tendrás al final:
- ✅ Sitio web funcionando 24/7
- ✅ URL pública: `https://techassist247.vercel.app`
- ✅ HTTPS automático (seguro 🔒)
- ✅ Actualizaciones automáticas
- ✅ TODO GRATIS

---

## 📋 MÉTODO 1: Deploy Directo (5 minutos)

### Paso 1: Abrir Terminal/PowerShell

En Windows:
- Presiona `Win + R`
- Escribe `powershell`
- Enter

### Paso 2: Navegar a tu proyecto

```bash
cd "C:\Users\danie\Desktop\pagina web de sistemas\techassist247"
```

### Paso 3: Instalar dependencias

```bash
npm install
```

**Espera 2-3 minutos...** ☕

### Paso 4: Probar localmente (opcional)

```bash
npm run dev
```

Se abre en `http://localhost:5173` - ¡Revisa que todo funcione!

Presiona `Ctrl + C` para detener.

### Paso 5: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 6: Login en Vercel

```bash
vercel login
```

Te pedirá elegir método:
- Selecciona: **GitHub** (recomendado)
- O **Email** si no tienes GitHub

Se abrirá el navegador → Autoriza

### Paso 7: Deploy

```bash
vercel --prod
```

Responde las preguntas:
```
? Set up and deploy? → Y (Enter)
? Which scope? → Tu cuenta (Enter)
? Link to existing project? → N (Enter)
? What's your project's name? → techassist247 (Enter)
? In which directory is your code located? → ./ (Enter)
```

**¡Espera 1-2 minutos!** 🚀

### Paso 8: ¡LISTO!

Te dará una URL como:
```
✅ Production: https://techassist247.vercel.app
```

**¡Tu sitio ya está ONLINE!** 🎉

---

## 📋 MÉTODO 2: Con GitHub (Automático)

### Paso 1: Crear cuenta en GitHub

1. Ir a: https://github.com
2. Sign up (gratis)
3. Verificar email

### Paso 2: Subir tu proyecto

En la terminal:

```bash
cd "C:\Users\danie\Desktop\pagina web de sistemas\techassist247"

git init
git add .
git commit -m "Sitio TechAssist 24/7"
```

### Paso 3: Crear repositorio en GitHub

1. Ir a: https://github.com/new
2. Repository name: `techassist247`
3. Click "Create repository"

### Paso 4: Push al repositorio

Copia los comandos que GitHub te muestra:

```bash
git remote add origin https://github.com/TU-USUARIO/techassist247.git
git branch -M main
git push -u origin main
```

### Paso 5: Conectar con Vercel

1. Ir a: https://vercel.com
2. Sign up con GitHub
3. Click "Add New Project"
4. Seleccionar `techassist247`
5. Click "Deploy"

**¡Espera 2 minutos!** ☕

### Paso 6: ¡LISTO!

Tu sitio está en: `https://techassist247.vercel.app`

**Ventaja:** Cada vez que hagas cambios y los subas a GitHub, Vercel actualiza automáticamente.

---

## 🎨 ACTUALIZAR EL SITIO

### Si usaste Método 1:

```bash
# Haz tus cambios en los archivos
# Luego:
vercel --prod
```

### Si usaste Método 2:

```bash
# Haz tus cambios
git add .
git commit -m "Descripción del cambio"
git push

# ¡Vercel actualiza automáticamente!
```

---

## 🌐 AGREGAR DOMINIO PROPIO

### Paso 1: Comprar dominio

Proveedores recomendados:
- **Namecheap**: ~$10/año
- **GoDaddy**: ~$12/año
- **Google Domains**: ~$12/año

Compra: `www.techassist247.com` (o el que prefieras)

### Paso 2: Conectar con Vercel

1. En Vercel → Tu proyecto → Settings
2. Click "Domains"
3. Agregar: `techassist247.com`
4. Vercel te dará instrucciones DNS

### Paso 3: Configurar DNS

En tu proveedor de dominio:
- Agregar registro `A`: Apuntar a la IP de Vercel
- Agregar registro `CNAME`: `www` → `cname.vercel-dns.com`

**Espera 24-48 horas** para propagación DNS.

---

## ❓ PROBLEMAS COMUNES

### Error: "command not found: npm"

**Solución:** Instala Node.js
1. Ir a: https://nodejs.org
2. Descargar versión LTS
3. Instalar
4. Reiniciar terminal

### Error: "ECONNRESET"

**Solución:** Problema de internet
```bash
npm cache clean --force
npm install
```

### Error: "Permission denied"

**Solución:** Ejecutar PowerShell como Administrador

### El sitio no carga estilos

**Solución:**
```bash
npm run build
vercel --prod
```

---

## 📞 ¿Necesitas Ayuda?

**Email:** escalantegomez01@gmail.com

O contrata a alguien en Fiverr para que lo haga por ti (~$10-20).

---

## 🎯 CHECKLIST FINAL

Antes de publicar:

- [ ] Cambié el número de teléfono
- [ ] Cambié el email
- [ ] Cambié el WhatsApp
- [ ] Probé el formulario
- [ ] Revisé que todo funcione
- [ ] Probé en móvil

---

**¡Tu sitio estará online en menos de 10 minutos!** 🚀

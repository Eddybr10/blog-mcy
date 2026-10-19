# 🛡️ Blog Académico & Profesional — Eduardo Flores Yépez

> **Maestría en Ciberseguridad (MCY) — Tecnológico de Monterrey**  
> Trimestre: Septiembre - Diciembre 2026  
> Materia: **Configuración de activos y gestión de vulnerabilidad**  
> Publicaciones activas: **Blog #0 (Hola Mundo)** & **Blog #1 (Gestión de Activos y Riesgo)**  

Bienvenido al repositorio del blog personal y académico de **Eduardo Flores Yépez** (Ingeniero en Computación, Especialista Senior en Tecnología/eCommerce y estudiante de la Maestría en Ciberseguridad en el Tec de Monterrey).

---

## 💻 Cómo Ejecutar el Proyecto Localmente

Para previsualizar el sitio en tu navegador con recarga y estilos completos:

### Opción 1: Con Python (Recomendado)
Abre tu terminal en la carpeta del proyecto y ejecuta:
```bash
python3 -m http.server 8000
```
Luego abre en tu navegador:
👉 **[http://localhost:8000](http://localhost:8000)**

### Opción 2: Con Node.js / npx
```bash
npx serve .
```

### Opción 3: Abrir directamente el archivo
En macOS puedes abrir cualquier página con el comando:
```bash
open index.html
```

---

## 🚀 Despliegue en Render (100% Gratuito y Permanente)

Los sitios estáticos en Render son **completamente gratuitos, no se suspenden por inactividad**, cuentan con certificado SSL automático (HTTPS) y red CDN global. Cada vez que hagas `git push origin main`, Render actualizará el sitio en automático.

URL pública en producción:
`https://blog-mcy.onrender.com`

---

## 📄 Requisitos de Entrega en Canvas

> ⚠️ **IMPORTANTE:** La rúbrica y las instrucciones de Canvas exigen entregar un archivo PDF que contenga la **liga (URL) directa a la publicación, NO a la página principal del blog**.

### 1. Entregable Blog #1 (`Actividad_Blog1_A01797283.PDF`)
- **Liga directa:** `https://blog-mcy.onrender.com/posts/blog-1-gestion-activos-riesgo.html`
- **Cómo generarlo:**
  1. Abre en tu navegador `http://localhost:8000/entrega-pdf-blog1.html` o `entrega-pdf-blog1.html`.
  2. Haz clic en **"🖨️ Imprimir / Guardar como PDF"**.
  3. En la ventana de impresión, selecciona **"Guardar como PDF"**, márgenes mínimos/ninguno y activar **"Gráficos de fondo"**.
  4. Nómbralo: `Actividad_Blog1_A01797283.PDF`.

### 2. Entregable Blog #0 (`Actividad_Blog0_A01797283.PDF`)
- **Liga directa:** `https://blog-mcy.onrender.com/posts/blog-0-hola-mundo.html`
- **Generador:** `entrega-pdf.html` (o el archivo PDF ya generado `Actividad_Blog0_A01797283.PDF`).

---

## 🌟 Estructura del Proyecto

- **`index.html`**: Portada principal con estética Cyberpunk/Dark mode, métricas clave, tarjeta de Blog #1 (destacada) y Blog #0.
- **`posts/blog-1-gestion-activos-riesgo.html`**: Entrada de la Actividad Blog #1 (Gestión de activos, CMDB, líneas base, Zero Day Coffee, control de cambios, HostedScan y 12 referencias APA).
- **`posts/blog-0-hola-mundo.html`**: Entrada de la Actividad Blog #0 (Hola Mundo, trayectoria, eCommerce y reflexión de blogging).
- **`about.html`**: Biografía detallada, evolución de puestos en CLOE, stack técnico e información académica.
- **`entrega-pdf-blog1.html`**: Generador del documento oficial de entrega de Blog #1 con tabla de rúbrica de 100 puntos.
- **`entrega-pdf.html`**: Generador del documento oficial de entrega de Blog #0.
- **`assets/`**: Hojas de estilo CSS con tokens modernos, JS interactivo y assets gráficos en alta definición.

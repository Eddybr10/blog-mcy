# 🛡️ Blog Académico & Profesional — Eduardo Flores Yépez

> **Maestría en Ciberseguridad (MCY) — Tecnológico de Monterrey**  
> Trimestre: Septiembre - Diciembre 2026  
> Actividad: **Blog #0 (Hola Mundo)**  

Bienvenido al repositorio del blog personal y académico de **Eduardo Flores Yépez** (Ingeniero en Computación, Especialista Senior en Tecnología/eCommerce y estudiante de la Maestría en Ciberseguridad en el Tec de Monterrey).

---

## 🚀 Despliegue en Render (100% Gratuito y Permanente)

Los sitios estáticos en Render son **completamente gratuitos, no se suspenden por inactividad**, cuentan con certificado SSL automático (HTTPS) y red CDN global.

### Paso 1: Subir este proyecto a tu GitHub

1. Abre tu terminal de PowerShell en esta carpeta (`c:\Users\eddy2\Desktop\blog`):
   ```bash
   git init
   git add .
   git commit -m "feat: blog profesional y post blog #0 para maestria MCY"
   ```
2. Crea un repositorio en [GitHub.com](https://github.com) llamado `blog-mcy` o `mi-blog`.
3. Conéctalo y súbelo:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

### Paso 2: Conectar con Render

1. Entra a [dashboard.render.com](https://dashboard.render.com/) e inicia sesión con tu cuenta de GitHub (es gratis).
2. Haz clic en el botón azul **"New +"** (arriba a la derecha) y selecciona **"Static Site"**.
3. Selecciona tu repositorio recién creado de GitHub.
4. Completa estos 3 sencillos campos:
   - **Name:** `blog-eduardo-flores` (o el nombre que prefieras).
   - **Branch:** `main`
   - **Build Command:** *(Déjalo vacío)*
   - **Publish directory:** `.` *(un solo punto, que significa la raíz)*
5. Haz clic en **"Create Static Site"**.
6. En menos de 60 segundos, Render te dará tu URL pública con HTTPS:
   `https://blog-eduardo-flores.onrender.com`

---

## 📄 Requisito Crítico de Entrega en Canvas

> ⚠️ **IMPORTANTE:** La rúbrica y las instrucciones de la actividad exigen entregar un archivo PDF que contenga la **liga (URL) directa a la publicación, NO a la página principal del blog**.

Tu liga directa será:
```text
https://TU-SUBDOMINIO.onrender.com/posts/blog-0-hola-mundo.html
```

### Cómo generar tu entregable en PDF (`Actividad_Blog0_A01797283.PDF`):

1. Abre en tu navegador el archivo [entrega-pdf.html](file:///c:/Users/eddy2/Desktop/blog/entrega-pdf.html).
2. Verifica que tu matrícula oficial ya aparece asignada: `A01797283`.
3. En el campo de URL, pega la liga directa que te dio Render (ej. `https://blog-eduardo-flores.onrender.com/posts/blog-0-hola-mundo.html`).
4. Haz clic en el botón azul **"🖨️ Imprimir / Guardar como PDF"**.
5. En la ventana de impresión de tu navegador:
   - **Destino:** "Guardar como PDF" (Save as PDF).
   - **Márgenes:** Predeterminados o Ninguno.
   - **Gráficos de fondo:** Activado (Checked).
6. Guarda el archivo con el nombre exacto solicitado:
   `Actividad_Blog0_A01797283.PDF`
7. Sube ese archivo PDF al botón **"Entregar tarea"** en Canvas.

---

## 🌟 Estructura del Blog

- **`index.html`**: Portada principal con presentación, métricas clave (+2,000 hrs automatizadas, checkout VTEX, proyectos), llamada a la acción y resumen de próximas publicaciones.
- **`posts/blog-0-hola-mundo.html`**: Entrada de la actividad evaluable. Contiene la reflexión sobre el hábito de escribir (citando a Ken Bauer y Scott Hanselman), tu trayectoria desde infraestructura hasta líder técnico de eCommerce en CLOE, el contexto de decisión por la ciberseguridad (casos reales de contingencia y phishing), expectativas, atribución formal de imágenes CC BY 4.0 y referencias bibliográficas en formato académico.
- **`about.html`**: Biografía detallada, evolución de puestos, stack técnico por áreas (Frontend, Backend, Datos, Ciberseguridad), idiomas y certificaciones.
- **`entrega-pdf.html`**: Generador del documento oficial de entrega con liga directa y tabla de alineación a la rúbrica de 100 puntos.
- **`assets/`**: Estilos CSS modernos (Dark/Light mode automático), JS para barra de lectura, cálculo de palabras y assets gráficos en alta definición.

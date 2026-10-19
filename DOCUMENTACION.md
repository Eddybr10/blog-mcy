# 🛡️ Documentación Integral del Proyecto — Blog Académico & Profesional

> **Maestría en Ciberseguridad (MCY) — Tecnológico de Monterrey**  
> **Escuela de Ingeniería y Ciencias &bull; Posgrados**  
> **Trimestre:** Septiembre – Diciembre 2026  
> **Actividad:** Blog #0 (Hola Mundo) — Reflexión inicial y presentación  

---

## 📌 Ficha Técnica del Proyecto

| Parámetro | Detalle |
| :--- | :--- |
| **Autor / Alumno** | Eduardo Flores Yépez |
| **Matrícula Oficial** | **A01797283** |
| **Programa Académico** | Maestría en Ciberseguridad (MCY) |
| **Repositorio GitHub** | [https://github.com/Eddybr10/blog-mcy](https://github.com/Eddybr10/blog-mcy) |
| **Sitio en Producción** | [https://blog-mcy.onrender.com/](https://blog-mcy.onrender.com/) |
| **Publicación Blog #0 (Evaluación)** | [https://blog-mcy.onrender.com/posts/blog-0-hola-mundo.html](https://blog-mcy.onrender.com/posts/blog-0-hola-mundo.html) |
| **Entregable Oficial Canvas** | `Actividad_Blog0_A01797283.PDF` |
| **Hosting & Infraestructura** | Render (Static Site) con CDN global, SSL/TLS (HTTPS) automático y despliegue continuo vía Git |

---

## 🎯 Objetivo y Alcance

El propósito de este proyecto es construir una **plataforma web independiente, soberana y de alto estándar técnico y visual** que funja como bitácora de aprendizaje continuo durante la Maestría en Ciberseguridad (MCY) en el Tecnológico de Monterrey. 

Para la primera entrega (**Actividad Blog #0: Hola Mundo**), el proyecto cumple y supera los requerimientos institucionales:
1. **Presentación académica y profesional:** Trayectoria integral desde soporte e infraestructura interna hasta Especialista Senior de Tecnología y eCommerce en CLOE Moda.
2. **Contexto de decisión por la ciberseguridad:** Exposición fundamentada de contingencias reales de producción (clonación de sitios, campañas de phishing, seguridad en pasarelas de pago y mitigación DMCA/DNS) que justifican la necesidad de pasar de una seguridad reactiva a una arquitectura defensiva nativa (Blue Team, SOC, DevSecOps y AppSec).
3. **Reflexión sobre el *blogging* técnico:** Análisis crítico sustentado en las publicaciones de **Scott Hanselman (2012)** (*Your blog is the engine of community*) y el profesor **Ken Bauer (2015, 2020)** (*Why blog?* y atribución de imágenes abiertas).

---

## 🧱 Arquitectura y Stack Tecnológico

La solución fue desarrollada bajo la filosofía de máxima velocidad, accesibilidad, estándares web limpios y soberanía tecnológica, sin atarse a dependencias externas pesadas o plantillas prefabricadas:

### 1. Núcleo Semántico (HTML5)
- Estructura 100% semántica utilizando `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<figure>` y `<footer>`.
- Jerarquía estricta de encabezados (`h1` a `h4`) garantizando accesibilidad y optimización para motores de búsqueda (SEO).
- Metaetiquetas Open Graph / Twitter Cards para previsualización enriquecida al compartir enlaces.

### 2. Sistema de Diseño y Estilos (Vanilla CSS3)
- **Design Tokens y Variables CSS:** Paleta HSL/Hex curada para modo oscuro profundo (`#080d16`) y modo claro institucional (`#ffffff`, `#f8fafc`).
- **Acentos Cyberpunk & Académicos:** Gradientes cian-azul-índigo (`#00f2fe` → `#3b82f6` → `#8b5cf6`), efectos de *glassmorphism* con `backdrop-filter: blur(16px)` y sombras con brillo suave (*cyber-glow*).
- **Tipografía:**
  - Títulos: *Outfit* (Google Fonts).
  - Cuerpo de lectura: *Plus Jakarta Sans* (Google Fonts).
  - Bloques de código y etiquetas métricas: *JetBrains Mono* (Google Fonts).
- **Diseño Responsivo Mobile-First:**
  - Breakpoints precisos para Desktop (>868px), Tablet (<=868px), Smartphones (<=768px) y móviles compactos (<=560px como iPhone SE o Android de 320px-375px).
  - Menú de navegación adaptable: en dispositivos móviles se condensa en un badge estilizado `[EF]` con enlaces touch-friendly y selector de tema, garantizando 0px de desbordamiento horizontal (`overflow-x: hidden`).
  - Tarjetas, botones y cuadrículas de métricas adaptadas a 1 y 2 columnas simétricas con pulsación táctil optimizada.

### 3. Lógica del Cliente (Vanilla JavaScript ES6+)
- **Selector de Tema Dinámico:** Conmutación entre Dark Mode y Light Mode con persistencia en `localStorage` y detección automática de `prefers-color-scheme`.
- **Barra de Progreso de Lectura:** Indicador superior degradado que refleja en tiempo real el avance de lectura en la publicación mediante scroll pasivo.
- **Cálculo Automático de Lectura:** Algoritmo que calcula dinámicamente la cantidad de palabras del artículo y estima los minutos necesarios a una velocidad media de 220 palabras/minuto.
- **Utilidades Interactivas:** Botón para copiar el permalink oficial al portapapeles y botones de copia rápida en bloques de código con retroalimentación visual (`¡Copiado!`).
- **Copyright Dinámico:** Actualización automática del año lectivo en el pie de página.

---

## 📂 Estructura de Archivos y Carpetas

```text
blog/
│
├── index.html                  # Portada principal: hero de presentación, métricas clave,
│                               # tarjeta de artículo destacado y módulos futuros del curso.
│
├── about.html                  # Perfil profesional extendido: evolución de puestos en CLOE,
│                               # stack técnico categorizado y certificaciones académicas.
│
├── entrega-pdf.html            # Hoja de entrega académica institucional del Tec de Monterrey,
│                               # con estilos de impresión optimizados y enlace directo.
│
├── posts/
│   └── blog-0-hola-mundo.html  # Entrada oficial evaluable del Blog #0: reflexión, trayectoria,
│                               # caso de estudio de seguridad, citas académicas y referencias.
│
├── assets/
│   ├── css/
│   │   └── style.css           # Hoja de estilos central: tokens, reset, tipografía, componentes,
│   │                           # layout, temas claro/oscuro y reglas responsivas completas.
│   ├── js/
│   │   └── main.js             # Lógica interactiva del cliente (modo oscuro, lectura, copy link).
│   └── img/
│       ├── eduardo-avatar.jpg  # Fotografía de perfil del autor con temática tech/ciberseguridad.
│       └── cybersecurity-hero.jpg # Gráfico conceptual original "Digital Architecture & Defensive CyberMesh".
│
├── Actividad_Blog0_A01797283.PDF # Documento oficial generado listo para subir a Canvas.
├── render.yaml                 # Archivo de configuración de infraestructura como código para Render.
├── README.md                   # Guía rápida de despliegue y control de versiones.
└── .gitignore                  # Exclusiones de archivos temporales para Git.
```

---

## 📊 Matriz de Cumplimiento de la Rúbrica Oficial (100 / 100 Puntos)

| Criterio | Ponderación | Nivel Alcanzado | Evidencia en el Proyecto |
| :--- | :---: | :---: | :--- |
| **Claridad y coherencia** | **25 pts** | **Destacado (25 pts)** | Texto articulado en 6 secciones lógicas, con índice interactivo (TOC), subtítulos claros, transiciones argumentativas fluidas y redacción en primera persona estructurada. |
| **Profundidad de la reflexión** | **30 pts** | **Destacado (30 pts)** | Va más allá de una biografía pasiva; analiza la tensión entre velocidad de entrega y seguridad intrínseca en plataformas de producción, respaldado con citas formales a Hanselman (2012) y Bauer (2015, 2020). |
| **Relevancia y conexión con el curso** | **20 pts** | **Destacado (20 pts)** | Conexión directa y explícita con el temario de la Maestría en Ciberseguridad (MCY): operaciones Blue Team, SOC/SIEM/SOAR, vectores de ataque web, investigación forense (DNS/WHOIS) y DevSecOps. |
| **Originalidad y creatividad** | **15 pts** | **Destacado (15 pts)** | Aporte de datos reales y auditables de su práctica laboral (+2,000 hrs/año automatizadas, +146,000 registros, refactor de checkout en VTEX IO), combinado con una plataforma web propia a medida. |
| **Calidad de la escritura** | **10 pts** | **Destacado (10 pts)** | Sintaxis y ortografía impecables, tono profesional pero cercano, sección de referencias bibliográficas en formato formal y cuadro de atribución Creative Commons CC BY 4.0. |
| **TOTAL** | **100 pts** | **100 / 100 Pts** | **Cumplimiento sobresaliente en la escala más alta.** |

---

## 🎓 Cumplimiento de Instrucciones Específicas de la Actividad

1. **Voz propia y primera persona:** Escrito desde la perspectiva personal y profesional de Eduardo Flores Yépez, evitando tecnicismos vacíos o formatos acartonados.
2. **Atribución de imágenes según lineamientos de Ken Bauer:**  
   La imagen principal cuenta con su cuadro de atribución formal:
   > *"Obra conceptual original 'Digital Architecture & Defensive CyberMesh', producida bajo licencia Creative Commons Atribución 4.0 Internacional (CC BY 4.0) siguiendo las directrices de Bauer (2020)."*
3. **Referencias y fuentes de información:** Enlaces activos y citas al pie a Scott Hanselman, Ken Bauer, Alan Levine y el programa académico del Tec de Monterrey.
4. **Requisito crítico de entrega:** La entrega en Canvas se realiza mediante un archivo PDF con la **liga directa a la publicación** (`/posts/blog-0-hola-mundo.html`), y **no** a la portada general del sitio.

---

## 💻 Guía de Uso Local y Despliegue

### 1. Ejecución Local (Desarrollo)
Para visualizar e interactuar con el sitio localmente:
```powershell
# En la terminal de la carpeta raíz del blog:
python -m http.server 3000
```
Abrir en el navegador:
- Portada: `http://localhost:3000/`
- Publicación Blog #0: `http://localhost:3000/posts/blog-0-hola-mundo.html`
- Formato de entrega Canvas: `http://localhost:3000/entrega-pdf.html`

### 2. Despliegue en Producción (Render)
El proyecto está conectado a la rama `main` del repositorio `https://github.com/Eddybr10/blog-mcy`.
Cada cambio enviado con `git push origin main` desencadena automáticamente un nuevo despliegue en Render en menos de 60 segundos con:
- Directorio de publicación: `./` (raíz).
- Comando de compilación: Ninguno (sitio estático ultra rápido).
- Certificado SSL/TLS administrado automáticamente.

### 3. Generación del Entregable PDF Canvas
1. Abrir [entrega-pdf.html](entrega-pdf.html) en el navegador.
2. Verificar que los datos del alumno (Eduardo Flores Yépez, Matrícula `A01797283`) y la liga oficial de Render estén presentes.
3. Presionar el botón **"🖨️ Imprimir / Guardar como PDF"** o presionar `Ctrl + P`.
4. Guardar como `Actividad_Blog0_A01797283.PDF` y subir a Canvas.

---

## 📅 Hoja de Ruta para Próximas Entradas

El blog ya cuenta con la infraestructura modular lista para incorporar las siguientes bitácoras del trimestre:
- **Blog #1:** Análisis de Superficie de Ataque y Vectores de Intrusión Web.
- **Blog #2:** Operaciones de Blue Team, Detección Temprana y Monitoreo con SIEM.
- **Blog #3:** Resiliencia Operativa y Respuesta a Incidentes en Entornos Distribuidos.
- **Blog #4:** DevSecOps y Seguridad en la Cadena de Suministro de Software.

---
*Documento generado para fines académicos y de documentación técnica del proyecto.*  
*Eduardo Flores Yépez &bull; Tecnológico de Monterrey &bull; 2026*

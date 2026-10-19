Actividad Blog #1 — Módulo 1: Fundamentos de Gestión de Activos y su Relación con el Riesgo
Autor: Eduardo Flores Yepez
Matrícula: A01797283
Curso: Configuración de activos y gestión de vulnerabilidad — Maestría en Ciberseguridad
Propósito de este archivo: borrador completo de la entrada, guía de publicación y comprobación de rúbrica.
Fecha límite indicada: domingo 18 de octubre de 2026, 23:59 (verificar en Canvas si todavía admite entregas).
Importante: La tarea no consiste en subir este Markdown directamente. Hay que publicar la entrada en un blog o documento compartido, copiar la URL de la publicación específica y entregar un PDF que contenga esa URL. Este archivo ofrece el texto base para editarlo y publicarlo. Verifica que los comentarios sobre las lecturas reflejen lo que realmente leíste; no atribuyas a capítulos afirmaciones que no hayas comprobado.

Lo que aprendí sobre gestión de activos: conocer la tecnología antes de intentar protegerla
Reflexión personal sobre el Módulo 1 de Configuración de activos y gestión de vulnerabilidad
Introducción: de administrar sistemas a entender el riesgo
En mi trabajo como desarrollador e ingeniero enfocado en comercio electrónico, estoy acostumbrado a pensar en aplicaciones, integraciones, bases de datos, plataformas y cambios que tienen que funcionar correctamente. Muchas veces, la prioridad del día a día es resolver un problema, liberar una mejora o mantener un servicio disponible. Sin embargo, este módulo me hizo revisar una pregunta que puede parecer sencilla: ¿cómo puedo proteger adecuadamente un sistema si no tengo claro qué activos lo componen, quién es responsable de ellos y qué procesos del negocio dependen de su funcionamiento?

Mi principal aprendizaje fue que la gestión de activos no debe reducirse a elaborar un inventario de equipos. Implica identificar componentes tecnológicos, clasificarlos, conocer sus relaciones, documentar configuraciones y establecer controles para que los cambios no introduzcan riesgos innecesarios. Lo importante no es solamente saber qué existe, sino entender qué impacto tendría que algo falle, cambie o sea comprometido.

A lo largo del módulo relacioné este enfoque con las lecturas asignadas, el proyecto colaborativo de Zero Day Coffee y la práctica de escaneo de vulnerabilidades con HostedScan y Google Gruyere. Estas actividades me permitieron conectar la planeación, la administración de configuraciones y la evaluación técnica de riesgos.
1. Primer aprendizaje: un inventario debe servir para tomar decisiones
Una de las ideas que más me llamó la atención fue la diferencia entre tener una lista de activos y contar con un inventario útil para la seguridad. Un registro puede contener el nombre de un servidor o de una computadora, pero esa información aislada no permite evaluar adecuadamente su importancia. Para que sea útil, es necesario añadir atributos como el propietario, ubicación, función, criticidad, estado, versión de configuración y relación con los servicios del negocio.

Este punto lo relacioné con las lecturas de gestión de activos asignadas en la semana 2: el capítulo 2 de Hobbs (2011) y los capítulos 3 y 7 de Boerger (2021). Más que memorizar términos, me interesó contrastar el enfoque administrativo con la necesidad operativa de disponer de información confiable y actualizada. Mi interpretación es que un inventario desactualizado puede dar una falsa sensación de control: la organización cree conocer sus activos, pero podría dejar fuera servicios en la nube, integraciones o componentes que siguen en operación.

En un entorno de comercio electrónico, esto resulta especialmente relevante. Una tienda no depende únicamente del sitio visible para el cliente: también necesita sistemas de pedidos, servicios de pago, bases de datos, integraciones y herramientas de seguimiento. Si uno de estos componentes no está registrado o no tiene un responsable claro, es más difícil detectar una configuración insegura, programar su mantenimiento o dimensionar el efecto de una interrupción.

Por eso, hoy considero que un buen inventario no es un archivo que se crea una vez y se guarda; es una fuente de información que debe mantenerse durante todo el ciclo de vida de los activos.
2. Proyecto Zero Day Coffee: llevar la teoría a una empresa ficticia
La actividad más completa del módulo fue el proyecto colaborativo Zero Day Coffee, en el que desarrollamos una propuesta de gestión de activos, configuraciones y control de cambios para una cadena ficticia de cafeterías con 11 sucursales en Ciudad de México. El escenario incluía terminales de punto de venta (POS), red Wi-Fi, un ERP de inventario y una aplicación de lealtad. El problema central era que la empresa había crecido sin un inventario centralizado, con diferencias de configuración entre sucursales y cambios sin autorización formal.

Mi participación se enfocó en la planificación del programa. Trabajé en definir el alcance, los objetivos, los roles y responsabilidades, la clasificación de criticidad, el uso de líneas base, el procedimiento de cambios, las plataformas de apoyo y el cronograma. Esta parte me ayudó a entender que un programa de seguridad necesita tanto decisiones técnicas como responsabilidades organizacionales.
Clasificar por criticidad, no tratar todo igual
En el proyecto propusimos tres niveles: alta, media y baja criticidad. Las terminales POS, la red principal y el ERP se consideraron de alta criticidad porque una falla puede detener ventas o comprometer información relevante. Los equipos administrativos se ubicaron en criticidad media cuando existían alternativas temporales, mientras que las funciones no esenciales se clasificaron como bajas.

Esta decisión me hizo reflexionar sobre algo importante: no todos los activos requieren la misma urgencia ni justifican la misma inversión en controles. La clasificación debe partir del impacto en el negocio, la exposición y la sensibilidad de los datos, no solo del precio del equipo o de qué tan sofisticada sea su tecnología.
La línea base como punto de comparación
Otro elemento central fue definir líneas base de configuración: estados aprobados y documentados contra los cuales comparar modificaciones posteriores. Por ejemplo, el proyecto identificaba el firewall FW-CDMX01-001 con una línea base inicial LB-FW-1.0. Después de un cambio aprobado, esa referencia podría actualizarse a LB-FW-1.1.

Antes veía la configuración principalmente como una tarea técnica. Ahora la entiendo también como una fuente de evidencia: permite saber qué se modificó, por qué, quién lo autorizó y cuál era el estado anterior. Si ocurre una falla, contar con una versión conocida facilita investigar y, cuando es viable, revertir el cambio.
Las dependencias también son parte del riesgo
En el modelo de CMDB del proyecto, un firewall estaba relacionado con las terminales POS y con la conectividad de una sucursal. Esto demuestra por qué una modificación aparentemente localizada puede afectar varios servicios. El inventario responde qué activos existen; la gestión de configuraciones y sus relaciones ayudan a explicar cómo dependen unos de otros.

Para mí, esa diferencia fue uno de los aprendizajes más prácticos. Si se desconoce la dependencia entre componentes, un cambio puede parecer de bajo impacto hasta que interrumpe un servicio crítico.
Planear antes de desplegar
Propusimos una implementación de 16 semanas, dividida en preparación (semanas 1–2), inventario y clasificación (3–6), configuración y piloto (7–10), y despliegue y seguimiento (11–16). Entre las herramientas consideradas estaban Snipe-IT, una plataforma ITSM con CMDB, un escáner de vulnerabilidades y una solución EDR.

La lección no fue que exista una herramienta capaz de resolver todo, sino que cada plataforma debe cumplir una función dentro de un proceso definido. Sin responsables, criterios de actualización y revisiones periódicas, incluso una herramienta costosa puede terminar almacenando información incorrecta.
3. Control de cambios: la rapidez también necesita disciplina
Otro tema que conecté directamente con mi experiencia laboral fue el control de cambios. Cuando se trabaja con plataformas digitales, es normal que aparezcan solicitudes urgentes: corregir un error, actualizar una integración o modificar una configuración. La presión por resolver rápido puede llevar a intervenir sin documentar suficientemente el riesgo.

En Zero Day Coffee distinguimos cambios estándar, normales y de emergencia. Los estándar son repetibles y de bajo riesgo; los normales requieren evaluación y aprobación según su impacto; y los de emergencia responden a situaciones críticas, pero aun así necesitan trazabilidad y documentación posterior. También definimos un flujo que parte de la solicitud, pasa por evaluación, aprobación, planificación, implementación y verificación, y termina con el cierre y la actualización de registros.

Lo que me parece más valioso es que el control de cambios no debería convertirse en burocracia que impide trabajar, sino en una forma de reducir errores evitables. Una buena práctica es acompañar cada modificación relevante de una evaluación de impacto, pruebas, respaldo y plan de reversión. Así, la organización puede seguir siendo ágil sin depender exclusivamente de la memoria o experiencia de una sola persona.

También comprendí que un cambio exitoso no es únicamente aquel que se implementó sin errores visibles. Debe conservar la seguridad, la continuidad del servicio y la documentación necesaria para futuras revisiones.
4. De la gestión de activos a la gestión de vulnerabilidades
Las lecturas posteriores ampliaron el panorama hacia el análisis del riesgo y la exposición de los activos. En la semana 3 se asignaron los capítulos 6, 8, 9 y 10 de Calder y Watkins (2007); en la semana 4, los capítulos 2, 5 y 7 de Haber y Hibbert (2018); y en la semana 5, los capítulos 2, 4, 5, 6 y 12 de Hughes y Robinson (2024).

Al conectar los temas generales de estas lecturas con las actividades, llegué a una conclusión: identificar una vulnerabilidad es solo una parte del trabajo; lo difícil es decidir qué significa para un activo concreto y qué se debe hacer después. Un hallazgo técnico necesita contexto: criticidad del activo, exposición, posibilidad de explotación, controles existentes y consecuencias para el negocio.

Por ejemplo, una configuración débil en un componente que procesa pagos puede justificar una respuesta diferente a la misma debilidad en un sistema aislado de pruebas. No se trata de ignorar hallazgos de menor severidad, sino de establecer prioridades justificables y revisar si el riesgo residual es aceptable.

Esto también me ayudó a entender que las lecturas sobre evaluación de riesgos, vectores de ataque y gestión de vulnerabilidades no son temas separados del inventario. Forman una secuencia: identificar activos, comprender su función, evaluar exposición, priorizar riesgos, aplicar controles y comprobar resultados.
5. Laboratorio HostedScan: interpretar es tan importante como escanear
La práctica con HostedScan y una instancia de Google Gruyere fue la oportunidad de observar esa secuencia en un caso técnico. Utilicé un escaneo pasivo basado en OWASP ZAP para revisar respuestas de la aplicación y obtener un reporte de configuraciones de seguridad. El ejercicio se limitó a la instancia del laboratorio; esta delimitación me recordó que una prueba de seguridad necesita autorización y alcance explícito.

El reporte registró 7 hallazgos: 2 de severidad media y 5 de severidad baja, sin alertas críticas ni altas. Entre los hallazgos medios aparecieron la ausencia de una política Content Security Policy (CSP) y la falta de una protección explícita contra clickjacking. Los hallazgos bajos se relacionaban con atributos de cookies y cabeceras HTTP, entre ellos HttpOnly, Secure, SameSite, X-Content-Type-Options y Strict-Transport-Security.

La primera conclusión que podría sacarse es que, al no haber alertas críticas, el sitio no presenta problemas graves. Sin embargo, eso sería una interpretación incorrecta. Un escaneo pasivo no garantiza que no existan otras vulnerabilidades; solo informa sobre lo que pudo observar con ese método y alcance. Además, la severidad que asigna la herramienta es una referencia inicial, no una evaluación completa del riesgo de negocio.

Si tuviera que empezar por un hallazgo del reporte, revisaría primero la ausencia de CSP y después la protección contra clickjacking, validando cómo se comporta realmente la aplicación y qué controles compensatorios existen. CSP no corrige por sí sola un XSS, pero puede aportar una capa adicional de defensa si se configura adecuadamente. También revisaría las cookies de sesión y las cabeceras de transporte, porque una serie de configuraciones débiles puede incrementar la exposición.

Otra reflexión fue la diferencia entre automatización y criterio profesional. La herramienta permite recopilar información con rapidez y repetir comprobaciones, pero una persona debe confirmar los resultados, distinguir falsos positivos, valorar el impacto y proponer acciones realistas. Por eso, considero que el escaneo automatizado y la revisión manual se complementan, en lugar de competir.
6. Cómo aplicaría estos aprendizajes en mi trabajo
Este módulo tiene una aplicación directa en el desarrollo y operación de plataformas de comercio electrónico. En mi entorno profesional conviven servicios web, bases de datos, integraciones, sistemas de pago y procesos automatizados. Aunque todos contribuyen a la operación, no siempre tienen el mismo nivel de criticidad ni las mismas necesidades de control.

A partir de lo aprendido, propondría comenzar con un inventario lógico de servicios y dependencias, además del inventario de infraestructura. Para cada componente importante registraría su propósito, responsable, entorno, datos que maneja, criticidad y relaciones con otros servicios. Después definiría configuraciones de referencia y una forma consistente de documentar cambios relevantes.

También buscaría integrar la gestión de vulnerabilidades con ese registro. En lugar de recibir alertas aisladas, cada hallazgo debería relacionarse con un activo, un responsable, una prioridad y una acción de remediación. Un indicador útil sería el porcentaje de activos críticos registrados y revisados, acompañado del tiempo de atención de vulnerabilidades relevantes y del porcentaje de cambios realizados con evidencia.

No considero realista implantar todos estos controles de golpe. Mi preferencia sería iniciar con los servicios más importantes para la operación, probar el proceso, corregir dificultades y ampliar gradualmente su alcance. De esa forma, la gestión de activos se convertiría en una práctica sostenible y no solo en un esfuerzo temporal para una auditoría.
7. Reflexión final: el activo más peligroso es el que nadie sabe que existe
Al comenzar el módulo, asociaba la gestión de activos principalmente con inventarios y documentación. Después de trabajar el proyecto, revisar los temas de riesgo y realizar el laboratorio, entendí que su valor es mucho más amplio: permite anticipar impactos, asignar responsabilidades, controlar configuraciones y decidir dónde concentrar esfuerzos de seguridad.

El proyecto Zero Day Coffee me enseñó a estructurar un programa antes de seleccionar herramientas; el trabajo de planificación me mostró la importancia de los roles, la criticidad y las líneas base; y HostedScan me recordó que un reporte técnico solo se vuelve útil cuando sus hallazgos se interpretan y se convierten en decisiones.

Me quedo con una idea que puedo aplicar tanto en la maestría como en mi trabajo: no se puede gestionar correctamente el riesgo de algo que no se conoce, no se documenta o no tiene responsable. La seguridad no comienza al ejecutar un escáner ni termina al corregir una vulnerabilidad. Es un proceso continuo de visibilidad, evaluación, cambio controlado y mejora.
Referencias y recursos consultados en el módulo
Estas referencias corresponden a los materiales asignados y a los marcos usados en las actividades. Antes de publicar, conserva como «consultadas» solo aquellas que efectivamente revisaste. Los comentarios del texto sobre las lecturas son síntesis personales de sus temas generales, no citas literales ni afirmaciones atribuidas a páginas específicas.

1. Hobbs, M. (2011). IT asset management: A pocket survival guide (cap. 2). IT Governance Publishing. https://learning.oreilly.com/library/view/it-asset-management/9781849282949/
2. Boerger, J. L. (2021). Rethinking information technology asset management (caps. 3 y 7). Business Expert Press. Material del curso en Canvas.
3. Calder, A., & Watkins, S. (2007). Risk assessment for asset owners (caps. 6, 8, 9 y 10). IT Governance Publishing. https://learning.oreilly.com/library/view/risk-assessment-for/9781849281232/
4. Haber, M. J., & Hibbert, B. (2018). Asset attack vectors: Building effective vulnerability management strategies to protect organizations (caps. 2, 5 y 7). Apress. https://learning.oreilly.com/library/view/asset-attack-vectors/9781484236277/
5. Hughes, C., & Robinson, N. (2024). Effective vulnerability management: Managing risk in the vulnerable digital ecosystem (caps. 2, 4, 5, 6 y 12). Wiley. https://learning.oreilly.com/library/view/effective-vulnerability-management/9781394221202
6. Center for Internet Security. CIS Controls. https://www.cisecurity.org/controls
7. National Institute of Standards and Technology. Cybersecurity Framework 2.0. https://www.nist.gov/cyberframework
8. OWASP Foundation. OWASP Top 10:2021. https://owasp.org/Top10/
9. OWASP ZAP. Documentación oficial. https://www.zaproxy.org/docs/
10. Google. Web Application Exploits and Defenses (Gruyere). https://google-gruyere.appspot.com/
11. HostedScan Security. Documentación. https://docs.hostedscan.com/
12. Equipo de proyecto (2026). Zero Day Coffee: Programa integral de gestión de activos, configuraciones y control de cambios. Proyecto académico colaborativo, Tecnológico de Monterrey. Material interno del curso.
GUÍA DE PUBLICACIÓN Y ENTREGA (NO ES PARTE DEL ARTÍCULO)
A. Antes de publicar
1. Relee la entrada y ajusta frases que no expresen exactamente tu experiencia. En particular, confirma qué capítulos leíste de manera completa; no afirmes haber leído material que solo te fue asignado.
2. Conserva los ejemplos concretos de Zero Day Coffee y HostedScan, pues son la evidencia más fuerte de conexión con las actividades del módulo.
3. Evita incluir identificadores de producción, contraseñas, cookies, tokens o datos de clientes reales. Los ejemplos laborales deben permanecer a nivel general.
4. Si agregas imágenes, usa capturas propias o material con permiso de uso; incluye debajo de cada una una descripción y su atribución. El artículo funciona sin imágenes, por lo que no son obligatorias.
5. Revisa que los enlaces de referencias abran y que el título sea específico.
B. Publicación
Opción 1: WordPress. Crear una nueva entrada, pegar desde el título hasta las referencias, aplicar títulos H2/H3, revisar vista previa y publicar. Abrir la entrada publicada en una ventana privada para comprobar que no requiere iniciar sesión. Copiar su enlace permanente, no la portada del blog.

Opción 2: documento compartido con docentes. Pegar el artículo en un documento de Google Docs o Word Online, dar permiso de lectura a las personas docentes según las reglas de la institución y probar el acceso desde otra sesión. Copiar el enlace directo al documento. Esta alternativa está expresamente permitida en las instrucciones proporcionadas.
C. Contenido exacto del PDF que se entrega en Canvas
Título: Actividad Blog #1 — Módulo 1
Alumno: Eduardo Flores Yepez
Matrícula: A01797283
Curso: Configuración de activos y gestión de vulnerabilidad
Título de la publicación: Lo que aprendí sobre gestión de activos: conocer la tecnología antes de intentar protegerla
Enlace directo a la publicación: [PEGAR AQUÍ LA URL REAL]
Nota: Esta liga dirige directamente a la entrada de reflexión del Módulo 1.

Exportar esta hoja como PDF y guardarla con el nombre exacto:

Actividad_Blog1_A01797283.PDF

No inventar una URL. El PDF solo puede finalizarse después de publicar la entrada o compartir el documento.
D. Comprobación contra la rúbrica
Criterio	Puntos	Evidencia en la entrada	Revisión final
Claridad y coherencia	25	Introducción, siete secciones temáticas, cierre y transiciones	Revisar lectura fluida
Profundidad de la reflexión	30	Comparación inventario/CMDB, análisis crítico de prioridades, límites de DAST y aplicaciones profesionales	Confirmar autenticidad de experiencias y lecturas
Relevancia y conexión con el curso	20	Lecturas semanas 2–5, Zero Day Coffee, control de cambios, HostedScan	Confirmar que todo pertenece al módulo evaluado
Originalidad y creatividad	15	Perspectiva personal de comercio electrónico y ejemplos técnicos concretos	Añadir, si se desea, una experiencia personal adicional
Calidad de escritura	10	Redacción formal, lenguaje natural, subtítulos y referencias	Corrección ortográfica final
Total posible	100	Diseñado para cubrir los criterios, sin garantía de calificación	Validar con rúbrica oficial


E. Lista final de verificación
- [ ] La reflexión refleja actividades y aprendizajes que realmente realicé.
- [ ] Incluí el proyecto Zero Day Coffee y mi participación en planificación.
- [ ] Incluí los resultados reales del laboratorio HostedScan: 7 hallazgos, 2 medios y 5 bajos.
- [ ] Relacioné las lecturas y marcos con ejemplos, sin inventar citas ni páginas.
- [ ] Revisé ortografía, coherencia, privacidad y atribución de recursos.
- [ ] La entrada está publicada o el documento compartido tiene acceso adecuado.
- [ ] Probé la URL directa en otra sesión.
- [ ] Generé Actividad_Blog1_A01797283.PDF con esa URL.
- [ ] Subí el PDF a Canvas y verifiqué la confirmación de entrega.
- [ ] Revisé si Canvas permite la entrega fuera de la fecha límite del 18 de octubre.
F. Fuentes de evidencia usadas para construir este borrador
- Instrucciones y rúbrica de Blog #1 proporcionadas en la conversación.
- Descripción de actividades y lecturas de semanas 2 a 5 proporcionadas en la conversación.
- Presentación del equipo Proyecto 23 — Zero Day Coffee (13 diapositivas): escenario, planificación, CMDB, control de cambios, métricas y tecnologías.
- Documento Actividad Herramienta #2 — Uso de HostedScan (28 páginas): procedimiento, resultados y reflexión del laboratorio.
Alcance: Este archivo es una base editable de trabajo. No acredita que la entrada esté publicada ni que el PDF ya haya sido entregado.



esta es la actividad y la otra entadda que quiero Tareas
Actividad Blog#1 (Módulo 1, Fundamentos de Gestión de Activo…

Trimestral Sep - Dic de 2026
Página de Inicio
Anuncios
Personas
Módulos
Programa del curso
Foros de discusión
Calificaciones4
Plan de evaluación
Cuaderno
Actividad Blog#1 (Módulo 1, Fundamentos de Gestión de Activos y su Relación con el Riesgo)
Fecha de entrega: dom 18 de oct de 2026 23:59
100 Points Possible
Intento 1
En progreso
SIGUIENTE: Presentar tarea

Unlimited Attempts Allowed

Objetivo
 
Reflexionar sobre los aprendizajes alcanzados durante la semana, con la finalidad de reconocer el valor de esta práctica como hábito profesional e identificar su aplicación en el propio desempeño laboral.

 


Instrucciones
 
Para la actividad Blog#1 te recomendamos escribir una entrada en la que compartas tu experiencia con el Módulo 1, Fundamentos de Gestión de Activos y su Relación con el Riesgo. Para ello:

Revisa las actividades que realizaste a lo largo del módulo y recupera las ideas que consideres más significativas.
Redacta tu entrada de blog compartiendo tu experiencia, tus aprendizajes y tus reflexiones sobre los temas trabajados.
Publica la entrada en tu blog y verifica que sea visible para las personas que consulten la liga.
Copia la liga (URL) de la publicación específica y entrégala en la plataforma dentro de la fecha establecida.
Aunque una entrada de blog es un texto personal, es muy importante indicar las fuentes de información que utilizaste. Considera las siguientes recomendaciones:
Cuando sea posible, incluye ligas (URL) hacia las páginas y los recursos que consultaste.
Da crédito a los recursos que utilices en tu diseño, como imágenes, videos u otros materiales.
Te recomendamos emplear imágenes con licencias abiertas. Para saber cómo hacerlo, revisa la siguiente publicación sobre cómo encontrar y atribuir imágenes: Bauer, K. (2020, 12 de agosto). Find and attribute images from Flickr. Ken Bauer. 
 


Especificaciones de entrega
 
Modalidad:  Individual.
Medio de realización/entrega: Se entrega en Canvas a través del botón "Entregar tarea".
Formato: Archivo PDF, el cual debe contener la liga (URL) que dirige directamente a la publicación en tu blog. No se acepta la liga a la página principal del blog.
Nombre del entregable: Actividad_Blog1_Matrícula.PDF.
 


Criterios de evaluación
 
Tu entrega se valorará con la rúbrica “Blog de reflexión” y se considerarán los siguientes aspectos:

Actividades clave: que la entrada mencione las actividades centrales que realizaste durante tu aprendizaje en el módulo.
Extensión: que el texto tenga una extensión suficiente para constituir una reflexión personal sobre las actividades del módulo.
 


Recursos de apoyo
 
Plataforma y alternativas de entrega

Recomendamos usar WordPress para tu blog, aunque puedes elegir otras plataformas similares.
Tener un blog público ofrece muchas ventajas.
Si prefieres no escribir de manera pública, puedes realizar las tareas de Blog entregando la liga a un documento compartido con los profesores.
Para conocer el procedimiento paso a paso, consulta el siguiente video sobre cómo crear un blog con WordPress: Bauer, K. (2025, 05 de septiembre). Cómo hacer un blog con WordPress (actualizado). [Video]. (s. f.). YouTube.
Lecturas y materiales opcionales sobre el proceso de blogging

Las siguientes referencias corresponden a los recursos citados en esta actividad. Las primeras apoyan la creación técnica del blog; el resto son lecturas y videos opcionales sobre el proceso de escribir un blog. Recuerda que una entrada de blog es un texto personal y debe reflejar tu carácter y tu personalidad.

Bauer, K. (2015, 11 de abril). Why blog? Ken Bauer. 
Bauer, K. (2020, 17 de abril). Writing/blogging with Ben Werdmüller. [Video]. YouTube. 
Hanselman, S. (2012, 5 de enero). Your blog is the engine of community. Scott Hanselman's Blog. 
Levine, A. (2014, 23 de agosto). Blogging like a Connected Courses champion. Connected Courses. Internet Archive. 
TWiT Tech Podcast Network (2017, 15 de marzo). Scott Hanselman: Why you need your own blog. [Video]. Triangulation. YouTube. 
 

Rúbrica - Blog de reflexión
Criterios	Calificaciones	Puntos
Claridad y coherencia

Destacado
La reflexión está claramente articulada, con una estructura lógica y cohesiva. Utiliza transiciones efectivas y lenguaje preciso.
25 pts

Sólido
La reflexión es clara y coherente, con estructura lógica. Utiliza transiciones adecuadas y lenguaje correcto.
22 pts

Aceptable
La reflexión es mayormente clara, aunque ocasionalmente carece de coherencia. La estructura es aceptable, pero puede mejorar.
18 pts

Básico
La reflexión es confusa y desorganizada. La estructura es débil y carece de coherencia.
13 pts
/25 pts
Profundidad de la reflexión

Destacado
La reflexión muestra una comprensión profunda de los temas del curso, integrando lecturas, actividades, noticias y experiencias personales de manera crítica y analítica.
30 pts

Sólido
La reflexión muestra una buena comprensión de los temas del curso, integrando lecturas, actividades, noticias y experiencias personales de manera adecuada.
27 pts

Aceptable
La reflexión muestra una comprensión básica de los temas del curso, con integración limitada de lecturas, actividades, noticias y experiencias personales.
23 pts

Básico
La reflexión muestra una comprensión superficial de los temas del curso, con poca o ninguna integración de lecturas, actividades, noticias y experiencias personales.
18 pts
/30 pts
Relevancia y conexión con el curso

Destacado
La reflexión está altamente relacionada con los temas del curso y muestra conexiones claras y relevantes con las lecturas, actividades, noticias y experiencias personales.
20 pts

Básico
La reflexión está relacionada con los temas del curso y muestra conexiones adecuadas con las lecturas, actividades, noticias y experiencias personales.
17 pts

Aceptable
La reflexión está parcialmente relacionada con los temas del curso y muestra conexiones limitadas con las lecturas, actividades, noticias y experiencias personales
13 pts

Básico
La reflexión está poco o nada relacionada con los temas del curso y no muestra conexiones claras con las lecturas, actividades, noticias y experiencias personales.
8 pts
/20 pts
Originalidad y creatividad

Destacado
La reflexión es altamente original y creativa, mostrando un enfoque único y personal. Utiliza ejemplos innovadores y perspectivas nuevas.
15 pts

Sólido
La reflexión es original y muestra creatividad, con un enfoque personal y ejemplos adecuados.
10 pts

Aceptable
La reflexión muestra algunos elementos de originalidad y creatividad, pero es mayormente convencional
8 pts

Básico
La reflexión carece de originalidad y creatividad, siendo muy convencional y poco personal.
5 pts
/15 pts
Calidad de la escritura

Destacado
La escritura es de alta calidad, con gramática, ortografía y sintaxis impecables. Utiliza un estilo atractivo y profesional.
10 pts

Sólido
La reflexión es original y muestra creatividad, con un enfoque personal y ejemplos adecuados.
7 pts

Aceptable
La escritura es aceptable, pero contiene varios errores gramaticales, ortográficos o de sintaxis.
6 pts

Básico
La escritura es deficiente, con numerosos errores gramaticales, ortográficos o de sintaxis.
4 pts
/10 pts
Elegir un tipo de presentación




Arrastrar un archivo hasta aquí, o
Elija un archivo para cargar
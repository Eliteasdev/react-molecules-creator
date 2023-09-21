# Primera versión
## 👨🏽‍💻 Tecnologías usadas
Para la implementación del proyecto, se emplearán tecnologías web con el objetivo de crear una aplicación de acceso sencillo y ampliar su alcance. A pesar de que se analizaron otras alternativas, como la programación en C# utilizando el motor Unity o el desarrollo de una aplicación nativa mediante Kotlin, se determinó que la construcción de una aplicación web resulta ser la elección más óptima. Esto se debe a su agilidad en el proceso de desarrollo, el conocimiento previo de las tecnologías involucradas y su capacidad de adaptación universal.

Las librerías principales son React y Three JS. Usando React para la maquetación de la solución y el aprovechamiento de su entorno de desarrollo. Mientras que Three JS es indispensable para hacer uso de WebGL con una experiencia de desarrollo más amigable.

A continuación se listan las dependencias tanto de producción como de desarrollo:
### 💻 Dependencias
* __React Redux Toolkit (v1.9.5)__: Un conjunto de herramientas y utilidades para simplificar la gestión del estado en aplicaciones React que utilizan Redux.
* __EventEmitter3 (v5.0.1)__: Una librería para gestionar eventos en JavaScript, que proporciona una forma eficiente de comunicación entre componentes.
* __React (v18.2.0)__: La biblioteca principal de React, utilizada para construir interfaces de usuario interactivas y componentes reutilizables.
* __React DOM (v18.2.0)__: Una parte de React que se utiliza para renderizar componentes en el navegador web.
* __React Redux (v8.1.2)__: Una biblioteca que integra React con Redux, facilitando la administración del estado global en aplicaciones React.
* __React Router DOM (v6.15.0)__: Una biblioteca para el enrutamiento en aplicaciones React, que permite la navegación entre diferentes vistas y componentes.
* __Three (v0.156.1)__: Una biblioteca 3D de JavaScript que se utiliza para crear gráficos y escenas 3D en aplicaciones web.

### ⚙️ Dependencias de desarrollo
* __Types React (v18.2.15)__: Tipos de TypeScript para React, que proporcionan verificación de tipos estática para componentes React.
* __Types React DOM (v18.2.7)__: Tipos de TypeScript para React DOM, que complementan los tipos de React y están relacionados con la manipulación del DOM.
* __Vite Js Plugin React SWC (v3.3.2)__: Un plugin para Vite.js que utiliza el compilador SWC para acelerar la compilación de proyectos React.
* __Autoprefixer (v10.4.15)__: Una herramienta que agrega automáticamente prefijos de navegadores a las reglas CSS para garantizar la compatibilidad cruzada.
* __ESLint (v8.48.0)__: Una herramienta que ayuda a mantener un código JavaScript limpio y consistente.
* __ESLint Config Standard (v17.1.0)__: Una configuración de ESLint basada en el estilo de código "Standard" para aplicaciones JavaScript.
* __PostCSS (v8.4.29)__: Un procesador de CSS que permite transformar y mejorar el código CSS con una variedad de plugins.
* __TailwindCSS (v3.3.3)__: Un framework de diseño de CSS que facilita la creación de interfaces de usuario elegantes y receptivas.
* __Vite (v4.4.5)__: Un entorno de desarrollo rápido para aplicaciones web que ofrece recarga en caliente y una experiencia de desarrollo eficiente.

### 🎨 Partes de la aplicación
Para nuestro enfoque inicial, dividimos la aplicación en tres componentes principales:

#### Diseñador
En esta sección, los usuarios podrán diseñar la estructura de moléculas en un entorno bidimensional. Este diseño servirá como base para la representación posterior en la pestaña "Molécula".
#### Molécula
En esta pestaña, se implementa la representación tridimensional de las moléculas diseñadas previamente. Para lograr esto, se utiliza Three.js, lo que permite crear una experiencia visual rica y tridimensional para los usuarios.
#### AR
En la tercera pestaña, estaba planificado incorporar un representador de Realidad Aumentada (AR) para visualizar las moléculas diseñadas.
### Conclusiones
Tras la implementación de la primera versión funcional, se anticipó que la subdivisión de las partes de la aplicación podría resultar confusa para los usuarios. Entonces se tomó la decisión de simplificar la interfaz eliminando las pestañas "Diseñador" y "AR". En lugar de ello, se unificó la funcionalidad del diseñador de moléculas y la visualización de las mismas en un mismo entorno tridimensional.
Además, se optó por eliminar por completo la característica de Realidad Aumentada (AR) con el propósito de focalizar y mejorar el núcleo de la aplicación, que es el modelado de moléculas. 

[Aplicacion](https://react-molecules-creator.vercel.app/ 
)

[Código fuente de la primera versión](https://github.com/Eliteasdev/react-molecules-creator/tree/v1.0 )

👨🏽‍💻🚀✨

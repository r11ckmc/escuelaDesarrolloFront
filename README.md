<a name="br1"></a> 

**TECNOLÓGICO NACIONAL DE MÉXICO**

**Instituto Tecnológico de Tláhuac**

**Desarrollo FrontEnd Web**

**Alumnos:**

Linares Pérez Margarita

Miranda Cuevas Ricardo

Laura Fatima Mendoza Vertiz

**Profesor:**

Cordero Ocampo Martin

Ramon

**Grupo:**



<a name="br2"></a> 

7s2

**Contenido**

**Resumen**

3

4

**Introducción**



<a name="br3"></a> 

**Tecnologías utilizadas**

**Desarrollo**

5

7

**Tabla de funciones**

**Pruebas y resultados**

8

10

10

14

15

**Conclusiones**

**Bibliografía**

**Resumen**

"Nuestra aplicación, desarrollada en ReactJS, está diseñada para facilitar la

inserción de productos en una tienda de abarrotes. Utilizando esta plataforma, los

usuarios pueden agregar nuevos productos al catálogo de la tienda de manera



<a name="br4"></a> 

eficiente y fácil. Con características intuitivas y amigables para el usuario, agregar

descripciones detalladas y establecer precios, nuestra aplicación ofrece una

solución robusta y adaptable para la gestión de inventario en el ámbito de las

tiendas de abarrotes.

ReactJS, una biblioteca de JavaScript de código abierto es ampliamente utilizada

en el desarrollo de aplicaciones web por su eficiencia y capacidad para crear

interfaces de usuario interactivas.

La aplicación se compone de varios componentes modulares que trabajan juntos

para crear una experiencia fluida para el usuario. Estos componentes incluyen

formularios de entrada de datos, listas de productos, botones de acción y

elementos de navegación.

Cuando un usuario accede a la aplicación, se le presenta una interfaz limpia y bien

diseñada que le permite agregar productos fácilmente.

Una vez que se ingresan los detalles del producto y se hace clic en el botón de

"Agregar", la información se valida y se envía al sistema para su procesamiento.

ReactJS maneja de manera eficiente la actualización de la interfaz de usuario para

reflejar el estado actual de la aplicación, lo que brinda una experiencia receptiva al

usuario.

Además de agregar nuevos productos, la aplicación también permite al usuario ver

una lista de productos existentes en el sistema. Esta lista se presenta de forma

clara y ordenada, lo que facilita la búsqueda y la gestión de productos.

La aplicación web utiliza técnicas modernas de desarrollo web, como el

enrutamiento del lado del cliente, para proporcionar una experiencia de

navegación sin problemas. Esto significa que cuando el usuario interactúa con la

aplicación, como al hacer clic en un enlace de navegación, ReactJS carga y

renderiza dinámicamente el contenido correspondiente sin necesidad de recargar

la página completa.



<a name="br5"></a> 

**Introducción**

En la era digital actual, las aplicaciones web juegan un papel crucial en nuestra

vida cotidiana, desde la gestión de tareas hasta las compras en línea. La demanda

de aplicaciones web modernas y eficientes sigue en aumento, lo que ha llevado al

desarrollo de tecnologías innovadoras para satisfacer estas necesidades en

constante evolución.

Una de estas tecnologías líderes en el desarrollo de aplicaciones web es ReactJS.

ReactJS, una biblioteca de JavaScript de código abierto mantenida por Facebook

se ha convertido en la opción preferida para muchos desarrolladores debido a su

capacidad para crear interfaces de usuario interactivas y dinámicas.

En esta introducción, exploraremos el potencial de ReactJS en el desarrollo de

aplicaciones web, centrándonos en su capacidad para crear experiencias de

usuario fluidas y receptivas. Examinaremos cómo ReactJS simplifica el proceso de

desarrollo al permitir la creación de componentes reutilizables y la gestión eficiente

del estado de la aplicación.

Además, analizaremos cómo

ReactJS se integra con otras

tecnologías

y

herramientas

populares, como el enrutamiento

del lado del cliente y la gestión del

estado global, para proporcionar

una experiencia de desarrollo

completa y poderosa.

En resumen, esta introducción sienta las bases para explorar el emocionante

mundo del desarrollo de aplicaciones web utilizando ReactJS y otras tecnologías

modernas. A lo largo de este viaje, descubriremos cómo estas herramientas



<a name="br6"></a> 

pueden ayudarnos a crear aplicaciones web robustas y de alto rendimiento que

satisfagan las demandas del mundo digital de hoy en día.

**Tecnologías utilizadas**

***React JS***

React.js, comúnmente llamado simplemente React, es una biblioteca de

JavaScript que se utiliza para construir interfaces de usuario. Toda aplicación web

React se compone de componentes reutilizables que conforman partes de la

interfaz de usuario, podemos tener un componente distinto para nuestra barra de

navegación, otro para el pie de página, otro para el contenido principal, etc.

***JavaScript***

Es un lenguaje de programación o de secuencias de comandos que te permite

implementar funciones complejas en páginas web, cada vez que una página web

hace algo más que sentarse allí y mostrar información estática para que la veas,

muestra oportunas actualizaciones de contenido, mapas interactivos, animación

de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo.



<a name="br7"></a> 

***CSS***

El CSS es lo que se llama un lenguaje de hojas de estilo en cascada y se utiliza

para estilizar elementos escritos en un lenguaje de marcado como HTML. Separa

el contenido de la representación visual del sitio.

CSS utiliza una sintaxis simple basada en el inglés con un conjunto de reglas que

la gobiernan. Como mencionamos anteriormente, HTML no fue hecho con la

intención de utilizar elementos de estilo, sino solo para el marcado de la página.

Fue creado simplemente para describir el contenido. Por ejemplo**:** <p>Esto es un

párrafo. </p>



<a name="br8"></a> 

**Desarrollo**

1\. Configuración del Entorno:se configuro el entorno desarrollo utilizando

node.js

2\. Crear Componentes:se crearon los componentes utilizados tales como el

componente *“navbarr”* y *“card”* los cuales se mostraran en la foto posterior



<a name="br9"></a> 

3\. Gestión de Estado: Utilizamos el estado de React para almacenar y

manipular la lista de productos. Se uso el hook useState para esto.

Además, necesitaremos manejar el estado de los enlaces de Facebook.

4\. Formulario de Agregar Producto: Creamos un formulario donde los usuarios

puedan ingresar detalles del producto, como nombre, precio, descripción,

etc. Al enviar el formulario, actualiza el estado de la lista de productos.

5\. Mostrar Productos: Muestra la lista de productos en tu interfaz de usuario.

Esto se realizó mapeando sobre la lista de productos y renderizando un

componente Producto para cada uno.



<a name="br10"></a> 

6\. Agregar Enlaces a Páginas de Facebook: Crea componentes o

simplemente colocamos enlaces HTML <a> que lleven a las páginas de

Facebook.

7\. Estilizar la Interfaz de Usuario: Utilizamos CSS para darle estilo a la

aplicación y hacer que se vea atractiva y fácil de usar.

8\. Prueba y Depuración: Probamos la aplicación para asegurarnos de que

funcione como se espera.

9\. El testeo funciono y quedó lista.

**Tabla de funciones**



<a name="br11"></a> 

*abla de funciones que es lo equivalente 1*

**Pruebas y resultados**

Settotal

App

Usestate

Actualiza la vista de los

totales

Componente principal

Componente que une

todas las funciones de la

aplicación web



<a name="br12"></a> 

*Básicamente lo que realizamos fue una función llamada “App” que es*

*el componente principal, usamos “useState” como manejo de*

*componente local y “datos” guarda una lista de objetos con la*

*información sobre los productos.*

*Lo que se realizó fue retornar un bloque JSX que representa la estructura de la*

*barra de navegación, el elemento “nav” envuelve los elementos en barras de*

*navegación, “li” contiene enlaces para diferentes redireccionamientos sobre la*

*aplicación web.*



<a name="br13"></a> 

*Contiene los redireccionamientos a enlaces como Facebook, entre otros.*



<a name="br14"></a> 

*En esta interfaz se observan los primeros campos para ingresar a la aplicación,*

*cuenta con la caja de nombre del producto, descripción y precio del producto al*

*igual que un botón de agregar producto.*



<a name="br15"></a> 

Finalmente se tiene agregados distintos productos y quedan registrados en el

sistema.

**Conclusiones**

se puede concluir que el desarrollo del producto en la libreria “R*eact JS*” permite el

desarrollo de forma modular haciendo las herramientas creadas reutilizables y poder llevar

un mejor control de los componentes utilizados ya que las modificaciones no afectas a

otras partes del desarrollo

ReactJS simplifica la creación de interfaces de usuario mediante su enfoque

basado en componentes, lo que permite una organización clara y modular del

código, la inclusión de enlaces a páginas de Facebook muestra cómo ReactJS

permite una fácil integración de contenido externo, mejorando la experiencia del

usuario y ampliando las funcionalidades de la aplicación.

Una vez desarrollada la interfaz de usuario, se pueden realizar pruebas

exhaustivas para garantizar su funcionamiento correcto antes de proceder con el

despliegue en un servidor para su disponibilidad pública.

En resumen, esta aplicación web desarrollada en ReactJS ofrece una experiencia

de desarrollo eficiente, rendimiento optimizado y una interfaz de usuario dinámica

y atractiva, lo que la convierte en una opción popular para una amplia variedad de

proyectos web.



<a name="br16"></a> 

**Bibliografía**

*¿Qué es CSS?* (2019, January 24). Tutoriales Hostinger.

https://www.hostinger.mx/tutoriales/que-es-css

*¿Qué es JavaScript? - Aprende sobre desarrollo web | MDN*. (n.d.).

Developer.mozilla.org.

https://developer.mozilla.org/es/docs/Learn/JavaScript/First\_steps/What\_is\_

JavaScript

*¿Qué es React.js? Un Vistazo a la Popular Biblioteca de JavaScript*. (n.d.). Kinsta.

https://kinsta.com/es/base-de-conocimiento/que-es-react-js/


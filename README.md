# Miguita

Proyecto de e-commerce desarrollado con React para una pastelería artesanal.

## Tecnologías

- React
- JavaScript
- Vite
- CSS

## Componentes

- Navbar: muestra el nombre de la tienda y las categorías de productos.
- CartWidget: muestra el icono del carrito y la cantidad de productos.
- ItemListContainer: muestra un mensaje de bienvenida recibido mediante props y gestiona la carga de productos.
- ItemList.jsx: recorre la lista de productos.
- Item.jsx: muestra cada producto.
- ItemDetailContainer: obtiene el producto mediante una promesa.
- ItemDetail: muestra la información del producto.
- ItemCount: permite seleccionar cantidades según el stock.
- getProductById.js: obtiene un producto por su ID.

## Evidencias de implementación

### Navbar y CartWidget
Implementados en `src/components/Navbar.jsx` y `src/components/CartWidget.jsx`.

### Props
`App.jsx` envía la prop `greeting` a `ItemListContainer.jsx`, que muestra el mensaje de bienvenida.

### Listado dinámico de productos
Se utilizan `useEffect`, `useState` y `async/await` para cargar los productos simulando una API. Luego, `ItemList.jsx` los recorre con `.map()` y `Item.jsx` muestra sus datos.

### Vista de detalle del producto

Se utiliza `ItemDetailContainer` para obtener un producto específico mediante `getProductById.js`, que devuelve una promesa. Se gestiona la carga y los posibles errores con `useEffect` y `useState`.

`ItemDetail` recibe el producto mediante props y muestra su información. Además, `ItemCount` permite seleccionar la cantidad deseada sin superar el stock disponible.

## Instalación y ejecución

1. Clonar el repositorio:

git clone https://github.com/cuestaagus/ecommerce-pasteleria.git

2. Entrar en la carpeta del proyecto:

cd ecommerce-pasteleria

3. Instalar las dependencias:

npm install

4. Iniciar el servidor de desarrollo:

npm run dev

5. Abrir en el navegador la dirección que indique la terminal, normalmente http://localhost:5173
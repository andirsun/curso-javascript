## Maquina Expendedora

Se requiere programar el codigo de una maquina expendedora de comidas, el codigo debe considerar las siguientes caracteristicas:

1. La maquina debe iniciar con 5 productos disponibles para poder comprar, cada producto tiene asignado un codigo, precio,
  cantidad y nombre por ejemplo:
  
  - codigo: 1, precio: 2100, cantidad: 5, nombre: "Papas"
  - codigo: 2, precio: 5000, cantidad: 5, nombre: "Empanada"
2. La maquina debe tener un dinero inicial para poder dar cambio a los clientes que lo necesiten. En todo momento debo mostrar
  cuanto dinero hay disponible para dar cambio
3. El proceso para comprar es el siguiente: 
  - El cliente selecciona el codigo de un producto para comprar
  - la maquina debe verificar que ese producto tenga cantidad disponible, si no lo tiene debe mostrar el mensaje "Producto no disponible, seleccione otro"
  - Si el producto esta disponible entonces se le debe preguntar al usuario con cuanto quiere pagar, si el dinero es menor al precio del producto debe mostrar el mensaje "Dinero insuficiente"
  - Si el dinero es suficiente entonces se le debe dar el cambio, si no hay cambio debe mostrar el mensaje "No hay cambio"
  - Luego, para finalizar la compra, se debe restar en 1 la cantidad del producto comprado, y se debe mostrar el mensaje "Compra realizada"
4. En el menu principal debe haber una opcion poder recargar un producto de la maquina cuando este en 0
5. En el menu debe haber una opcion para generar un reporte de los productos disponibles en la maquina y el dinero disponible
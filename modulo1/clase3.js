// Proyecto en GIthub (Listo)

// Tipos de datos nulos e indefinidos
const constanteNula = null
var constanteIndefinida = undefined
constanteIndefinida = 0
// Terminar modificadores de listas y Booleanos
var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Copiar elemento de lista
var primerelemento = lista[0]
console.log(primerelemento)
// Agregar un elemento a una lista
lista.push(11)
console.log(lista)
// Sacar un elemento de una lista
const ultimoElemento = lista.pop()
console.log(ultimoElemento)
// Modificadores booleanos
var verdadera = true
verdadera = !verdadera
var falsa = false
falsa = !falsa

// Objetos en javascript
// Objetos en javascript
var color = 'Rojo'
var persona = {
	edad: 22,
	tienePeloLargo: false,
	numerosPreferidos: [1, 2, 4],
	nombre: {
		nombre: 'Anderson',
		apellido: 'Laverde'	
  },
	nacionalidad: 'Colombiano',
  colorPreferido: 'Negro'
}
// Modificadores de objetos
// Imprimir propiedades de un objeto
console.log(persona.colorPreferido)
// Guardarlas
const nombrePersona = persona.nombre.apellido
console.log(nombrePersona)
// Agregar mas propiedades a un objeto
persona.comidaPreferida = 'Hamburguesa'
// Eliminar una propiedad de un objeto
delete persona.edad
// Comparadores (>, <, ===, !==, ! )
// Comparadores (>, <, ===, !==, ! )
// Mayor y menor que
4 > 3 // true
4 < 3 // false
// Igual
4 === 4 // true
100 === 99 /// false
'Hola' === 'Hola' // true
true === false // false
// Diferencia
4 !== 3 // true
4 !== 4 // false

// Operadores logicos (&& ||)
// And | Y | &&
// Para que un And sea verdadero(true) los valores de verdad que tiene a su derecha y a su izquierda deben ser verdaderos
true && true && true // true
4 > 3 && 5 < 2
// Or | ó
// Para que un Or sea verdadero(true) los valores de verdad que tiene a su derecha o izquierda, alguno de los dos debe ser true
true || false || false // true
4 < 3 || 5 < 2



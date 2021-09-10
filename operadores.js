/*  Operadores  */

//De asignación
var operador = "valor" //el simbolo igual () es el operador de asignación de las variables

//Aritméticos 

//Suma
console.log( 25 + 2 ); 
console.log("25" + 2);
console.log("25" + "2");

console.log("Hola" + " " + "¿Cómo estás?" )

//Resta
console.log(25-2);

//División
console.log(25 / 2);

//Incremento
let numero = 25;
console.log(++numero) //Incrementa en 1 el valor asignado

//Decremento
console.log(--numero) //Decrementa en 1 el valor asignado -> numero = 25
let numero2 = "2"
console.log(numero2)

//Modulo
console.log(15 % 3);
console.log(13 % 2);

//Operadores de comparación simple

//Igualdad
console.log(10 == 15)
console.log(10 == "10a") //compara los valores y NO los tipos de datos

// Desigualdad
console.log(10 != 15)


//Operadores de comparación estricta 
console.log(10 === "10") //compara valores y tipos de datos xd

console.log(10 != "10")

/* Operadores relacionales */
console.log(15 > 10) //Mayor que...
console.log(15 >= 10) //Mayor o igual que...
console.log(15 < 10) //Menor que...
console.log(15 <= 10) //Menor o igual que...


/* Operadores lógicos*/
// && (AND) permite combinar valores booleanos y su resultado también es un booleano 
console.log((10 > 15) && (10 != 20))
//          false    and    true
console.log((10 < 15) && (10!= 20))

// ||  (OR) Solo un valor debe evaluar como true para que la expresión retorne 

console.log((10 > 15) || (10 != 20))
//             false  or    true

console.log((10 > 15) || (10 == 20) || (15 === "15"))
//            false   or    false           false

// ! (NOT) Niega la condición, TRUE pasa a FALSE, false para true.
let color = "Verde";
let notEsRojo = !(color == "Rojo");
console.log(notEsRojo)




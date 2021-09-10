function sumar(numero1, numero2) {
    return numero1 + numero2;
}

console.log(sumar(10,15))

//Funciones declaradas
function saludar(nombre){
    return "Hola, " + nombre
}

let nombreDeUsuario= "Daniela"

console.log(saludar(nombreDeUsuario))

let hacerSushi= function(cantidad) {
    return "Sushi\n".repeat(cantidad)
}

//\n hace salto de línea 
console.log(hacerSushi(5))

function saludar2 (nombre, apellido){
    return "Hola " + nombre + " " + apellido
}

console.log(saludar2("María"))

let nombre1= "Jonathan"

console.log(saludar2(nombre1, "Cespedes"))

let restar = function (num1, num2){
    let resultado = num1 - num2;
    return resultado;
}

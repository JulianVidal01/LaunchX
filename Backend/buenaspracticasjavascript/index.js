const parrafoInicial = document.getElementById('parrafo')

console.log(parrafoInicial);

parrafoInicial.onclick = function() {
    cambiarColorAleatorio();
}

function cambiarColorAleatorio() {
    
    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ]
    console.log(colores[Math.floor(Math.random() * colores.length)])
    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)]
} 
/*

TIPOS DE VARIABLES

var -> Modificable, scope global - No se RECOMIENDA

let -> Modificable, scope limitado - RECOMENDADO USAR

const -> CONSTANTE, No modificable - scope global

*/

/*

CASES

PascalCase - Clases - Java

CamelCase - Variables, funciones, atributos - JavaScript
    Variable -parrafoInicial = 
    funcion -> parrafoInicial()
    atributo -> parrafoInicial

Snake_Case - Python
    Variables y funciones

CASE - Constantes

*/
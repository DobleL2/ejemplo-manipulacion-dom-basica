// 
// querySelector Pide que indiques las etiquetas que deseas seleccionar de tu htmls
/*
--- document.querySelector ---
Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los 
nodos del docuemnto) que coincida con el grupo especificado de selectores.    

--- document.querySelectorAll ---
Devuelve TODOS los elementos mediante un objeto que coincidan con el grupo especificado de selectores.
*/

const h1 = document.querySelector('h1'); 
const form = document.querySelector("#form");
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit',btnOnClick);


function btnOnClick(event) {
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + String(sumaInputs);
}

/*

Para editar el contenido de un elemento HTML desde JavaScript podemos usar:
* innerText
* append
* innerHTML
* appendChild

*/
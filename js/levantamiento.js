function mostrarCartas() {
    // Ocultar todas las cartas
    const cartas = document.querySelectorAll('.card');
    cartas.forEach(carta => carta.style.display = 'none');

    // Obtener el valor actual del select
    const semestre = document.querySelector('#semestres').value;

    // Mostrar solo las cartas correspondientes al semestre seleccionado
    if (semestre === '') {
      return; // No se ha seleccionado un semestre, no se muestra ninguna carta
    } else if (semestre === 'todos') {
      cartas.forEach(carta => carta.style.display = 'block'); // Mostrar todas las cartas
    } else {
      const cartasSemestre = document.querySelectorAll('.' + semestre);
      cartasSemestre.forEach(carta => carta.style.display = 'block'); // Mostrar las cartas del semestre seleccionado
    }
  }


  // parte de la tabla agregar eliminar y verificar se no chocan





// Agregar elementos

//agregar fisica

document.getElementById('rellenar-martes-jueves1-fisica').addEventListener('click', function() {
// Obtener referencias a las celdas correspondientes a lunes , miercoles y viernes

var martes1 = document.getElementById('martes-2');
var jueves1 = document.getElementById('jueves-2');
var h3 = document.querySelector("#miH3");
var valore = parseInt(h3.innerText);
valore=valore+1;
console.log(valore);
if (valore>1){
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede levantar más de 1 materia dale en confirmar materias.';
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";

//alert("No se puede adicionar más de 2 materias dale en confirmar materias.");  
} else // Verificar si las celdas están vacías antes de rellenarlas
if (document.getElementById('martes-3').textContent==='FIS200 - SB'|| document.getElementById('martes-2').textContent==='FIS200 - SA' ){

var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = "La materia ya esta inscrita";
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";

//alert('No se puede inscribir materia que ya inscribiste en otro grupo');
} else
if (martes1.textContent === '' && jueves1.textContent === '') {
// Rellenar las celdas con un texto y un color de fondo
martes1.textContent = 'FIS200 - SA';
martes1.style.backgroundColor = '#FFDAB9';
jueves1.textContent = 'FIS200 - SA';
jueves1.style.backgroundColor = '#FFDAB9';
incrementar()
} else {
const valorCelda = martes1.textContent;
eli=valorCelda;
console.log(eli); // a el
// Si las celdas no están vacías, mostrar un mensaje de error
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede inscribir esta materia el horario choca con:'+' '+eli;
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
}
});

// fisica2

document.getElementById('rellenar-martes-jueves2-fisica').addEventListener('click', function() {
// Obtener referencias a las celdas correspondientes a lunes , miercoles y viernes

var martes1 = document.getElementById('martes-3');
var jueves1 = document.getElementById('jueves-3');
var h3 = document.querySelector("#miH3");
var valore = parseInt(h3.innerText);
valore=valore+1;
console.log(valore);
if (valore>1){
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede levantar más de 1 materia dale en confirmar materias.';
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";

//alert("No se puede adicionar más de 2 materias dale en confirmar materias.");  
} else // Verificar si las celdas están vacías antes de rellenarlas
if (document.getElementById('martes-3').textContent==='FIS200 - SB'|| document.getElementById('martes-2').textContent==='FIS200 - SA' ){
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = "La materia ya esta inscrita";
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";

//alert('No se puede inscribir materia que ya inscribiste en otro grupo');
} else
if (martes1.textContent === '' && jueves1.textContent === '') {
// Rellenar las celdas con un texto y un color de fondo
martes1.textContent = 'FIS200 - SB';
martes1.style.backgroundColor = '#FFDAB9';
jueves1.textContent = 'FIS200 - SB';
jueves1.style.backgroundColor = '#FFDAB9';
incrementar()
} else {
const valorCelda = martes1.textContent;
eli=valorCelda;
console.log(eli); // a el
// Si las celdas no están vacías, mostrar un mensaje de error
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede inscribir esta materia el horario choca con:'+' '+eli;
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
}
});

//agregar software 2
document.getElementById('rellenar-martes-jueves5-software').addEventListener('click', function() {
// Obtener referencias a las celdas correspondientes a lunes , miercoles y viernes

var martes1 = document.getElementById('martes-6');
var jueves1 = document.getElementById('jueves-6');
var h3 = document.querySelector("#miH3");
var valore = parseInt(h3.innerText);
valore=valore+1;
console.log(valore);
if (valore>1){
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede levantar más de 1 materia dale en confirmar materias.';
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";

//alert("No se puede adicionar más de 2 materias dale en confirmar materias.");  
} else // Verificar si las celdas están vacías antes de rellenarlas
if (martes1.textContent === '' && jueves1.textContent === '') {
// Rellenar las celdas con un texto y un color de fondo
martes1.textContent = 'INF512 - SB';
martes1.style.backgroundColor = '#98FB98';
jueves1.textContent = 'INF512 - SB';
jueves1.style.backgroundColor = '#98FB98';
incrementar()
} else {
const valorCelda = lunes1.textContent;
eli=valorCelda;
console.log(eli); // a el
// Si las celdas no están vacías, mostrar un mensaje de error
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede inscribir esta materia el horario choca con:'+' '+eli;
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
}
});

//agregar taller
document.getElementById('rellenar-martes-jueves6-taller').addEventListener('click', function() {
// Obtener referencias a las celdas correspondientes a lunes , miercoles y viernes

var martes1 = document.getElementById('martes-7');
var jueves1 = document.getElementById('jueves-7');
var h3 = document.querySelector("#miH3");
var valore = parseInt(h3.innerText);
valore=valore+1;
console.log(valore);
if (valore>1){
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede levantar más de 1 materia dale en confirmar materias.';
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";

//alert("No se puede adicionar más de 2 materias dale en confirmar materias.");  
} else // Verificar si las celdas están vacías antes de rellenarlas
if (martes1.textContent === '' && jueves1.textContent === '') {
// Rellenar las celdas con un texto y un color de fondo
martes1.textContent = 'INF511 - SA';
martes1.style.backgroundColor = '#dcaff1';
jueves1.textContent = 'INF511 - SA';
jueves1.style.backgroundColor = '#dcaff1';
incrementar()
} else {
const valorCelda = lunes1.textContent;
eli=valorCelda;
console.log(eli); // a el
// Si las celdas no están vacías, mostrar un mensaje de error
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede inscribir esta materia el horario choca con:'+' '+eli;
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
}
});

//agregar arquitectura
document.getElementById('rellenar-lunes-miercoles-viernes-arquitectura').addEventListener('click', function() {
// Obtener referencias a las celdas correspondientes a lunes , miercoles y viernes
var lunes1 = document.getElementById('lunes-1');
var miercoles1 = document.getElementById('miercoles-1');
var viernes1 = document.getElementById('viernes-1');
var h3 = document.querySelector("#miH3");
var valore = parseInt(h3.innerText);
valore=valore+1;
console.log(valore);
if (valore>1){
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede levantar más de 1 materia dale en confirmar materias.';
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";

//alert("No se puede adicionar más de 2 materias dale en confirmar materias.");  
} else // Verificar si las celdas están vacías antes de rellenarlas
if (lunes1.textContent === '' && miercoles1.textContent === ''&& viernes1.textContent === '') {
// Rellenar las celdas con un texto y un color de fondo
lunes1.textContent = 'INF552 - SA';
lunes1.style.backgroundColor = '#B0C4DE';
miercoles1.textContent = 'INF552 - SA';
miercoles1.style.backgroundColor = '#B0C4DE';
viernes1.textContent = 'INF552 - SA';
viernes1.style.backgroundColor = '#B0C4DE';
incrementar()
} else {

const valorCelda = lunes1.textContent;
eli=valorCelda;
console.log(eli); // a el
// Si las celdas no están vacías, mostrar un mensaje de error
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede inscribir esta materia el horario choca con:'+' '+eli;
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
}
});

//agregar tecnoweb
document.getElementById('rellenar-lunes-miercoles-viernes3-tecnoweb').addEventListener('click', function() {
// Obtener referencias a las celdas correspondientes a lunes , miercoles y viernes
var lunes1 = document.getElementById('lunes-4');
var miercoles1 = document.getElementById('miercoles-4');
var viernes1 = document.getElementById('viernes-4');
var h3 = document.querySelector("#miH3");
var valore = parseInt(h3.innerText);
valore=valore+1;
console.log(valore);
if (valore>1){
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede levantar más de 1 materia dale en confirmar materias.';
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";

//alert("No se puede adicionar más de 2 materias dale en confirmar materias.");  
} else // Verificar si las celdas están vacías antes de rellenarlas
if (lunes1.textContent === '' && miercoles1.textContent === ''&& viernes1.textContent === '') {
// Rellenar las celdas con un texto y un color de fondo
lunes1.textContent = 'INF513 - SA';
lunes1.style.backgroundColor = '#f1afdf';
miercoles1.textContent = 'INF513 - SA';
miercoles1.style.backgroundColor = '#f1afdf';
viernes1.textContent = 'INF513 - SA';
viernes1.style.backgroundColor = '#f1afdf';
incrementar()
} else {

const valorCelda = lunes1.textContent;
eli=valorCelda;
console.log(eli); // a el
// Si las celdas no están vacías, mostrar un mensaje de error
var etiqueta = document.getElementById('etiqueta-flotante');

// Agregamos el mensaje "Hola Mundo" a la etiqueta flotante
etiqueta.innerHTML = 'No se puede inscribir esta materia el horario choca con:'+' '+eli;
// Mostramos la etiqueta flotante
etiqueta.style.display = "block";
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
//alert('No se puede inscribir esta materia el horario choca con:'+' '+eli);
}
}
);


//eliminar materia


const tabla = document.querySelector('table');
var eli = '';
var color = '';
tabla.addEventListener('click', (evento) => {
const celda = evento.target;
const valorCelda = celda.textContent;
color=celda.style.backgroundColor;
eli=valorCelda;
console.log(`El valor de la celda es: ${valorCelda}`);
console.log(`El valor del color es: ${color}`);
})
// Manejador de eventos para el botón "eliminar"
document.getElementById('eliminar-grupo').addEventListener('click', function() {
console.log(eli); // a el
if(color==='rgb(128, 128, 128)') { 

console.log('hola bb');
alert('No se puede eliminar tendrias que retirar la materia si deseas');
}else {
eliminarGrupoDeMateria(eli);
decrementar();
}

}); 
// Variable global para el grupo seleccionado
var grupoSeleccionado = '';

// Manejador de eventos para las celdas de la tabla
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
celdas[i].addEventListener('click', function() {
grupoSeleccionado = this.getAttribute('data-grupo');
});
}


function eliminarGrupoDeMateria(grupo) {

console.log(`El valor de la celda es: ${grupo}`);
// Obtener referencias a las celdas correspondientes al grupo de materia
var lunes1 = document.getElementById('lunes-1');
var martes1 = document.getElementById('martes-1');
var miercoles1 = document.getElementById('miercoles-1');
var jueves1 = document.getElementById('jueves-1');
var viernes1 = document.getElementById('viernes-1');
var lunes2 = document.getElementById('lunes-2');
var martes2 = document.getElementById('martes-2');
var miercoles2 = document.getElementById('miercoles-2');
var jueves2 = document.getElementById('jueves-2');
var viernes2 = document.getElementById('viernes-2');
var lunes3 = document.getElementById('lunes-3');
var martes3 = document.getElementById('martes-3');
var miercoles3 = document.getElementById('miercoles-3');
var jueves3 = document.getElementById('jueves-3');
var viernes3 = document.getElementById('viernes-3');
var lunes4 = document.getElementById('lunes-4');
var martes4 = document.getElementById('martes-4');
var miercoles4 = document.getElementById('miercoles-4');
var jueves4 = document.getElementById('jueves-4');
var viernes4 = document.getElementById('viernes-4');
var lunes5 = document.getElementById('lunes-5');
var martes5 = document.getElementById('martes-5');
var miercoles5 = document.getElementById('miercoles-5');
var jueves5 = document.getElementById('jueves-5');
var viernes5 = document.getElementById('viernes-5');
var lunes6 = document.getElementById('lunes-6');
var martes6 = document.getElementById('martes-6');
var miercoles6 = document.getElementById('miercoles-6');
var jueves6 = document.getElementById('jueves-6');
var viernes6 = document.getElementById('viernes-6');
var lunes7 = document.getElementById('lunes-7');
var martes7 = document.getElementById('martes-7');
var miercoles7 = document.getElementById('miercoles-7');
var jueves7 = document.getElementById('jueves-7');
var viernes7 = document.getElementById('viernes-7');
// Verificar el grupo de materia y eliminar el contenido de las celdas correspondientes
if (grupo === 'INF221 - SA') {
lunes1.textContent = '';
lunes1.style.backgroundColor = 'white';
miercoles1.textContent = '';
miercoles1.style.backgroundColor = 'white';
viernes1.textContent = '';
viernes1.style.backgroundColor = 'white';
} else if (grupo === 'INF221 - SB') {
martes1.textContent = '';
martes1.style.backgroundColor = 'white';
jueves1.textContent = '';
jueves1.style.backgroundColor = 'white';
} else if (grupo === 'INF221 - SC') {
lunes2.textContent = '';
lunes2.style.backgroundColor = 'white';
miercoles2.textContent = '';
miercoles2.style.backgroundColor = 'white';
viernes2.textContent = '';
viernes2.style.backgroundColor = 'white';
} else if (grupo === 'INF329 - SA') {
martes6.textContent = '';
martes6.style.backgroundColor = 'white';
jueves6.textContent = '';
jueves6.style.backgroundColor = 'white';
} else if (grupo === 'ELC105 - SA') {
martes6.textContent = '';
martes6.style.backgroundColor = 'white';
jueves6.textContent = '';
jueves6.style.backgroundColor = 'white';
} else if (grupo === 'INF512 - SB') {
martes6.textContent = '';
martes6.style.backgroundColor = 'white';
jueves6.textContent = '';
jueves6.style.backgroundColor = 'white';
}  else if (grupo === 'INF511 - SA') {
martes7.textContent = '';
martes7.style.backgroundColor = 'white';
jueves7.textContent = '';
jueves7.style.backgroundColor = 'white';
}  else if (grupo === 'INF552 - SA') {
lunes1.textContent = '';
lunes1.style.backgroundColor = 'white';
miercoles1.textContent = '';
miercoles1.style.backgroundColor = 'white';
viernes1.textContent = '';
viernes1.style.backgroundColor = 'white';
}  else if (grupo === 'INF513 - SA') {
lunes4.textContent = '';
lunes4.style.backgroundColor = 'white';
miercoles4.textContent = '';
miercoles4.style.backgroundColor = 'white';
viernes4.textContent = '';
viernes4.style.backgroundColor = 'white';
} else if (grupo === 'FIS200 - SA') {
martes2.textContent = '';
martes2.style.backgroundColor = 'white';
jueves2.textContent = '';
jueves2.style.backgroundColor = 'white';
} else if (grupo === 'FIS200 - SB') {
martes3.textContent = '';
martes3.style.backgroundColor = 'white';
jueves3.textContent = '';
jueves3.style.backgroundColor = 'white';
}  else {
console.log('Grupo de materia inválido');
}
console. log(grupo); 
}

// incrementar materias agregadas 
function incrementar() {
var h3 = document.querySelector("#miH3");
var valor = parseInt(h3.innerText);
if (valor < 1) {
  valor += 1;
  h3.innerText = valor.toString() + "/1";
} else {
  alert("No se puede adicionar más de 1 materia dale en confirmar materias.");
}
}

function decrementar() {
var h3 = document.querySelector("#miH3");
var valor = parseInt(h3.innerText);
if (valor > 0) {
  valor -= 1;
  h3.innerText = valor.toString() + "/1";
} else {
  alert("No se puede decrementar más.");
}
}


//evento para dimuir cupo
// Obtener todas las tarjetas de materias
const cards = document.querySelectorAll('.card');

// Iterar sobre cada tarjeta y agregar evento click
cards.forEach(card => {
card.addEventListener('click', () => {
// Obtener el elemento del párrafo del cupo
const cupoElement = card.querySelector('p:last-of-type');

// Obtener el valor actual del cupo
let cupo = parseInt(cupoElement.textContent.split(': ')[1]);

// Restar 1 al valor del cupo si es mayor a cero
if (cupo > 0) {
cupo--;
}

// Actualizar el contenido del elemento del párrafo del cupo
cupoElement.textContent = `Cupo: ${cupo}`;
});
});

//pintando MATERIAS INSCRITAS

//SISTEMA EXPERTOS
// Obtener el elemento con el id "lunes-1"
var lunes2 = document.getElementById("lunes-2");
// Establecer el contenido del elemento como "INF554"
lunes2.innerHTML = "INF428 - SB";
// Establecer el fondo del elemento como plomo (#808080)
lunes2.style.backgroundColor = "#808080";
var miercoles2 = document.getElementById("miercoles-2");
miercoles2.innerHTML = "INF428 - SB";
miercoles2.style.backgroundColor = "#808080";
var viernes2 = document.getElementById("viernes-2");
viernes2.innerHTML = "INF428 - SB";
viernes2.style.backgroundColor = "#808080";

//FISICA II
var martes1 = document.getElementById("martes-1");
// Establecer el contenido del elemento como "INF554"
martes1.innerHTML = "FIS102 - NW";
// Establecer el fondo del elemento como plomo (#808080)
martes1.style.backgroundColor = "#808080";
var jueves1 = document.getElementById("jueves-1");
jueves1.innerHTML = "FIS102 - NW";
jueves1.style.backgroundColor = "#808080";



// Obtener referencia a la etiqueta flotante
var etiqueta = document.getElementById('etiqueta-flotante');

// Escuchar el evento click en cualquier parte del documento
document.addEventListener('click', function(event) {
// Verificar si el clic fue dentro de la etiqueta flotante
var clicDentroEtiqueta = etiqueta.contains(event.target);

// Si el clic fue fuera de la etiqueta flotante, ocultarla
if (!clicDentroEtiqueta) {

}else {
etiqueta.style.display = 'none';
}
});
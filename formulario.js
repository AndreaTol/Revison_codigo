// faltan demasiadas ;   se agregan a todo el código
var formulario = document.querySelector(".formulario"); //"#form" esta mal, se cambia por formulario y se quita el #
formulario.addEventListener("submit", function (e) {  //es addEventListener, el evento se arregla, se agrega submit

  e.preventDefault(); // Se corrige la función para prevenir el comportamiento por defecto del formulario

  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }
  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) { //falta un = en >< para que acepte a los de 18 y los de 120
    agregarInvitado(nombre, edad, nacionalidad);
  }
});
// Aquí había un boton para elimiar invitados, se pasó al final para que quede dentro del div de cada invitado

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } 
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
   else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
   else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  };

  var lista = document.getElementById("elemento-lista");  // El elemento no existia en el html, se agregó y se cambia el id para coincidir con el css

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // es add y no added
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) { // no se estaba llamando a descripcion y valor
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": "; // se agrega descripcion y de quita "Nombre", ya que se duplica
    inputNombre.value = valor; //se cambia nombre por valor
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  };
// aquí estaban repetidas las variables de arriba, se eliminaron

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
};
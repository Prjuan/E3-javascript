let array_pizzas = [
{
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["salsa", "muzzarella", "aceitunas"],
    precio: 550
},
{
    id: 2,
    nombre: "Especial",
    ingredientes: ["salsa", "muzzarella", "jamon", "aceitunas", "morrones"],
    precio: 800
},
{
    id: 3,
    nombre: "Calabresa",
    ingredientes: ["salsa", "muzzarella", "salamin"],
    precio: 1000
},
{
    id: 4,
    nombre: "Margarita",
    ingredientes: ["salsa", "muzzarella", "anana"],
    precio: 1200
},
{
    id: 5,
    nombre: "Mediterranea",
    ingredientes: ["salsa", "muzzarella", "rucula", "aceitunas"],
    precio: 1200
},
{
    id: 6,
    nombre: "4 Quesos",
    ingredientes: ["salsa", "muzzarella", "reggianito", "rokefort", "fontina", "aceitunas"],
    precio: 1400
},]



let codigo = document.getElementById("codigo");
let btn = document.getElementById("boton");
let titulo2 = document.querySelector("h2");
let titulo4 = document.getElementById("precio");
let errorMensaje = document.querySelector("p");

function buscarid() {
   let numero = parseInt(codigo.value)
         array_pizzas.forEach(pizzas =>{
           if(pizzas.id === numero){
                titulo2.innerHTML = pizzas.nombre;
                titulo4.innerHTML = pizzas.precio;
           }  else if (numero > 6){
                titulo2.innerHTML = "";
                titulo4.innerHTML = "";
                mostrarError("No existe ese articulo");
           } 
        }) 
}

btn.addEventListener("click", buscarid);

function mostrarError(error) {
    // errorMensaje.textContent = error;
    errorMensaje.innerHTML = error;
}


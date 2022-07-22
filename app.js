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
    const resultado = array_pizzas.find(function(pizza){
        return pizza.id === numero;
    });
    if(resultado) {
        titulo2.innerHTML = resultado.nombre;
        titulo4.innerHTML = resultado.precio;
    } else {
        titulo2.innerHTML = "";
        titulo4.innerHTML = "";
        mostrarError("No existe");
        setTimeout(() => {
            mostrarError("");
            codigo.value = "";
        }, 3000)
    }
}
  
btn.addEventListener("click", buscarid);

function mostrarError(error) {
    errorMensaje.innerHTML = error;   
}



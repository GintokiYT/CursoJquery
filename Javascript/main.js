//* Modo estricto
'use strict';

//? DOM (Document Object Model)

// Div1
const Div1 = document.querySelector('#div1');
console.log(Div1);

setTimeout(() => {
    Div1.innerHTML = 'Texto modificado atravez de javascript';
}, 2000);


// Parrafos
const parrafo1 = document.querySelectorAll('.parrafo1');
console.log(parrafo1);

setTimeout(() => {
    parrafo1[0].innerHTML = 'Parrafo 1 modificado atravez de javascript';
}, 3000);

setTimeout(() => {
    parrafo1[1].innerHTML = 'Parrafo 2 modificado atravez de javascript';
}, 4000);

setTimeout(() => {
    parrafo1[2].innerHTML = 'Parrafo 3 modificado atravez de javascript';
}, 5000);


//? BOM (Browser Object Model)
console.log(`window.innerHeight => ${window.innerHeight}`);
console.log(`window.innerWidth => ${window.innerWidth}`);
console.log(`screen.height => ${screen.height}`);
console.log(`screen.width => ${screen.width}`);

console.table(window.location)

//? Eventos de los botones
const boton = document.querySelector('#boton');

boton.addEventListener("click", () => alert('Haz pulsado el boton'));

//? Timer o funciones temporales
window.addEventListener("load", () => {
    let count = 1;
    let tiempo = setInterval(() => {
        console.log(`Este mensaje se muestra cada 3 segundos : ${count}`);
        count++;
        if(count === 2){
            clearInterval(tiempo);
            console.log(`Este mensaje se muestra cada 3 segundos : ${count}`);
            console.log('Se termino el setInterval');
        }
    }, 3000)
})

//? Fechas
let fecha = new Date();
console.log(fecha);
let horas = fecha.getHours(), minutos = fecha.getMinutes(), segundos = fecha.getSeconds();
console.log(`getHours - Horas: ${horas}`);
console.log(`getMinutes - Minutos: ${minutos}`);
console.log(`getSeconds - Segundos: ${segundos}`);
console.log(`${horas}:${minutos}:${segundos}`);

// Reloj en Javascript
let Tiempo = document.querySelector('.tiempo');

window.addEventListener("load", () => {
    setInterval(() => {
        let fecha = new Date();
        let horas = fecha.getHours(), 
            minutos = fecha.getMinutes(), 
            segundos = fecha.getSeconds();
        
        // Agregamos al HTML
        let resultado = `${horas}:${minutos}:${segundos}`;

        Tiempo.innerHTML = resultado;
            
    }, 1000)
})

//? LocalStorage
let AlmacenamientoLocal = ( typeof(Storage))? "Disponible" : "No disponible";
console.log(AlmacenamientoLocal);


localStorage.setItem("clave", "Texto o valor de esta clave");
localStorage.setItem("edad", 37);

let valor = localStorage.getItem("clave");
console.log(valor);

let personas = [
    { nombre: "Manuel", edad: 27},
    { nombre: "Juan", edad: 25},
    { nombre: "Pedro", edad: 23},
    { nombre: "Maria", edad: 21},
    { nombre: "Juana", edad: 19},
    { nombre: "Jorge", edad: 17},
    { nombre: "Javier", edad: 15},
    { nombre: "Juanita", edad: 13},
    { nombre: "Juanito", edad: 11}
]

localStorage.setItem("personas", JSON.stringify(personas));

let people = JSON.parse(localStorage.getItem("personas"));
console.log(people);
console.log(people[0].nombre);


//? Programacion Orientada a Objetos

// Crear un objeto contructor
class Perro{
    constructor(raza){
        this.raza = raza;
    }
}

let perro = new Perro("Labrador");
console.log(perro);

class Mascota extends Perro{
    constructor(raza, nombre){
        super(raza);
        this.nombre = nombre;
    }
}

let mascota = new Mascota("Labrador", "Firulais");
console.log(mascota);






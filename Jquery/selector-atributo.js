"use strict";

$(document).ready(function(){

// Selector de etiqueta
let span = $("span");
span.css("border", "1px solid blue");
console.log(span.text());

// Selectores de atributo
let atributo = $('[title="Google"]');
atributo.css("font-size", "2rem");
console.log(atributo.text());

// Evento click
$("#btnmostrar").click(function(){
    $("#texto").show(1500);
    $("#texto").html("Acabas de pulsar el boton");
});
$("#btnocultar").click(function(){
    $("#texto").hide(1500);
});

// Boton mostrar y ocultar
$("#btnMostrar").click(function(){
    if($("#parrafo").css("display") === "none"){
        $("#parrafo").show(1500);
        $("#btnMostrar").text("Ocultar");
    }else{
        $("#parrafo").hide(1500);
        $("#btnMostrar").text("Mostrar");
    }
});

// Hover
$("#btn").html("Pasa el raton");

$("#btn").hover(function(){
    $("#btn").html("Saca el raton");
    $("#texto1").show(500);
}, function()  {
    $("#btn").html("Pasa el raton");
    $("#texto1").hide(500);
});

// Agregar y quitar clases
$(".parrafo2").hover( function(){
    $(this).addClass("borde");
}, function(){
    $(this).removeClass("borde");
})

// Efecto slide
$("#h2mostrar").click(function(){
    $("#parrafo3").slideToggle(1000, "swing", function(){
        console.log("Terminado");
    });
})

});
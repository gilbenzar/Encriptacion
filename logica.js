var botonEncriptar = document.querySelector("#btn-encriptar")
var botonDesencriptar = document.querySelector("#btn-desencriptar")
var botonCopiar = document.querySelector("#btn-copiar")
var resultado = document.getElementById("contenedor-resultado")
var textoVacio = document.getElementById("texto-vacio")
var textoCaracteres = document.getElementById("texto-caracteres")
const caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;

botonCopiar.style.display = "none";
resultado.style.display = "none";
textoVacio.style.display = "none";
textoCaracteres.style.display = "none";

//Funcion para ocultar la parte derecha donde se encuentra la imagen del muñeco y el texto//
function ocultarDerecha(){
    document.getElementById("contenedor-munheco").style.display = "none";
    document.getElementById("contenedor-mensajederecha").style.display = "none";
    document.getElementById("contenedor-parrafo").style.display = "none";
}

function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
    if(frase == ""){
        ocultarDerecha();
        textoCaracteres.style.display = "none";
        textoVacio.style.display ="block";
    }

    else if (frase.match(caracteres) != frase.match(caracteres)){
        ocultarDerecha();
        textoVacio.style.display = "none";
        textoCaracteres.style.display = "block";
    }
    
    else{
        textoVacio.style.display ="none"
        textoCaracteres.style.display = "none"

        var textoEncriptado = frase.replace(/e/img, "enter");
        var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
        
        ocultarDerecha();
        
        botonCopiar.style.display = "block";
        resultado.style.display = "block";
        
        document.getElementById("texto-resultado").innerHTML = textoEncriptado;
    }
}

botonEncriptar.onclick = encriptar;

function desencriptar (){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    if (frase == ""){
        ocultarDerecha();
        textoCaracteres.style.display = "none";
        textoVacio.style.display = "block"
    }

    else if(frase.match(caracteres) != frase.match(caracteres)){
        ocultarDerecha();
        textoVacio.style.display = "none";
        textoCaracteres.style.display = "block"
    }

    else{
        textoVacio.style.display ="none"
        textoCaracteres.style.display = "none"

        var textoEncriptado = frase.replace(/enter/img, "e");
        var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
        var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
        var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
        var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

        ocultarDerecha();
        
        botonCopiar.style.display = "block";
        resultado.style.display = "block";
        
        document.getElementById("texto-resultado").innerHTML = textoEncriptado;
    }
}

botonDesencriptar.onclick = desencriptar;

function copiar(){
    var contenido = document.querySelector("#texto-resultado");

    contenido.select();
    document.execCommand("copy");
}

botonCopiar.onclick = copiar;
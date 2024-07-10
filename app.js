function encriptar(){
    let texto=document.getElementById("texto").value;
    let ningun=document.getElementById("ningun");
    let ingresa= document.getElementById("ingresa");
    let gato=document.getElementById("gato");

    /* .replace para buscar vocal y reemplazarla, se utilizó método de arrays pero era más complicado*/
    let textoAEncriptar = texto.replace("a","ai").replace(/e/gi,"enter").replace(/i/gi,"imes").replace("o","ober").replace(/u/gi,"ufat")
    if (texto.length !=0){
        document.getElementById("textoResultado").value=textoAEncriptar;
        ningun.textContent="";
        ingresa.textContent="";
        gato.remove();
    } else{
        gato.src="./Imagenes/Foto Gato.jpg"
        ningun.textContent="Ningún mensaje fue encontrado";
        ingresa.textContent="Ingrese el texto que deseas encriptar o desencriptar";
        alert("No has escrito algo para encriptar")
    }


}

function desencriptar(){
    let texto=document.getElementById("texto").value
    let ningun=document.getElementById("ningun");
    let ingresa= document.getElementById("ingresa");
    let gato=document.getElementById("gato");
    
    let textoADesencriptar=texto.replace(/ai/gi,"a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u")

    if(texto.length!=0){
        document.getElementById("textoResultado").value=textoADesencriptar;
        ningun.textContent="";
        ingresa.textContent="";
        gato.remove();
    }else{
        gato.src="./Imagenes/Foto Gato.jpg"
        ningun.textContent="Ningún mensaje fue encontrado";
        ingresa.textContent="Ingrese el texto que deseas encriptar o desencriptar";
        alert("No has escrito algo para encriptar")
    }
}
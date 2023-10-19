var mensaje=document.getElementById("mensaje")
var nombre=document.getElementById("nombre")
var apellido=document.getElementById("apellido")
var email=document.getElementById("email")
document.getElementById("error");
error.style.color="red";

function enviarFormulario(){
    console.log("Enviando formulario...");
    var mensajesError=[];

    if (nombre.value===null || nombre.value===""){
        mensajesError.push("Ingresa tu nombre");
    }

    if (apellido.value===null || apellido.value===""){
        mensajesError.push("Ingresa tu apellido");
    }

    if (email.value===null || email.value===""){
        mensajesError.push("Ingresa tu email");
    }

    if (mensaje.value===null || mensaje.value===""){
        mensajesError.push("Ingresa mensaje");
    }
    error.innerHTML=mensajesError.join(", ");

    return false
}

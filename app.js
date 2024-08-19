
 numberSecreto = 0;
 intentos = 0;
console.log(numberSecreto);
listaNumerosSorteados = [];
numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elmentoHtml = document.querySelector(elemento);
    elmentoHtml.innerHTML = texto;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numberSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //Usuario no aceerto el número
        if(numeroDeUsuario > numberSecreto){
            asignarTextoElemento('p','El número secreto es menor');
            
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function intentoUsuario(){
    alert('Has clickeado el boton intentar'); 
}
function generarNumeroSecreto(){
    let numeroenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroenerado);
    console.log(listaNumerosSorteados);
    //Si el numero generado esta en la lista
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }
    else{
        if(listaNumerosSorteados.includes(numeroenerado)){
        return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroenerado);
            return numeroenerado;
        }
    }
}
function condicionInicial(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indica número del 1 al ${numeroMaximo}`);
    numberSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego(){
    //Limpiamos la caja para empezar el juego
    limpiarCaja();
    //Limpiar el mensaje de intervalo de enúmero, generar nuevo numero, reiniciar intentos
    condicionInicial();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionInicial();

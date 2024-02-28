let Numerosecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maxIntentos = 5;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario)
    console.log(typeof(numeroDeUsuario));
    console.log(Numerosecreto);
    console.log(typeof(Numerosecreto));
    console.log(numeroDeUsuario === Numerosecreto);
    if(numeroDeUsuario===Numerosecreto){
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > Numerosecreto) {
            asignarTextoElemento ('p', 'el numero es menor');
        } else {
            asignarTextoElemento ('p', 'el numero es mayor');
        }
        intentos++;
        if (intentos >= maxIntentos) {
            asignarTextoElemento('p', `Has excedido el número máximo de intentos. El número secreto era ${Numerosecreto}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
        limpiarCaja();
    }
    return;
}
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value=''; //hace que se limpie la caja ese '' significa que es nada
}

function generarNumeroSecreto (){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    //si el numero generado esta en la lista 
    if (listaNumerosSorteados.length == numeroMaximo){
asignarTextoElemento ('p', 'ya se sortearon todos los numeros posibles');
    } else{
    if (listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
    
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `inserta un numero del 1 al ${numeroMaximo}`);
    Numerosecreto = generarNumeroSecreto();
    intentos= 1;

}
function reiniciarJuego(){
    //limpiar caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //genrar el numero aleatoria
    //inicar el numero intentos
    //desabilidtar el boton nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();



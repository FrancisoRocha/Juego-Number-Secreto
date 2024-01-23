let numeroSecreto = 0;
let numeroIntento = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

// PRIMERA FUNCION QUE DA EL MENSAJE DEL JUEGO

function alternativaTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//SEGUNDA FUNCION QUE BRINDA UN MENSAJE SI
//EL USUARIO ACERTO Y BRINDA PISTA DEL NUMERO SECRETO

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        alternativaTexto('p', `Acertaste en ${numeroIntento} ${(numeroIntento === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            alternativaTexto('p', 'El numero es menor');
        } else {
            alternativaTexto('p', 'El numero es mayor');
        }
    }
    numeroIntento++;
    limpiarCaja();
}


//FUNCION QUE LIPIA LA CAJA DE NUMERO
//CUANDO EL USUARIO NO ACIERTA

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

//FUNCION QUE GENERA EL NUMERO SECRETO

function generarNumero() {
    let numeroGeneradoMaq = Math.floor(Math.random() * (numeroMaximo - 1 + 1)) + 1;
    //SI YA SE SORTEARON TODOS LOS NUMEROS

    //console.log(numeroGeneradoMaq);
    //console.log(listaNumeroSorteados);

    if (listaNumeroSorteados.length == numeroMaximo) {
        alternativaTexto('p', 'Se sortearon todos los numeros posibles');
    } else {
        //SI EL NUMERO GENERADO ESTA EN LA LISTA
        if (listaNumeroSorteados.includes(numeroGeneradoMaq)) {
            return generarNumero();
        } else {
            listaNumeroSorteados.push(numeroGeneradoMaq);
            return numeroGeneradoMaq;
        }
    }
}

//FUNCION QUE ABARCA EL NUMERO SECRETO
//INTENTO, Y LOS MENSAJE DEL JUEGO

function condicionalesIniciales() {
    alternativaTexto('h1','Juego del numero secreto');
    alternativaTexto('p', `Seleciona un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumero();
    numeroIntento = 1;
}

//FUNCIO DEL BOTON REINICIAR QUE 
//AL MOMENT DE QUE DE ADIVINA EL NUMERO SECRETO
//EL BOTON PUEDE CLICLEARSE PARA INICIAR UN NUEVO JUEGO

function reiniciarJuego() {
    //LIMPIRAR LA CAJA
    limpiarCaja();
    //INDICAR MENSAJE DE INTERVALOS DE NUMEROS
    //GENERAR NUMERO ALEATORIO
    //INICIALIZAR EL NUMERO DE JUEGO
    condicionalesIniciales();
    //DESABILITAR DE NUEVO JUEGO
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionalesIniciales();
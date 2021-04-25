import {listaNombres, purgatorio} from "./data.js"

let boton = document.getElementById("aleatorio")
let reinicio = document.getElementById("reiniciar")
let siguiente = document.getElementById("siguiente")
let botonStartKilling = document.getElementById("startGame")
let splash = document.getElementById("splash")


pintarListaVivos()

botonStartKilling.addEventListener("click", () =>{
    mainGame()
})

boton.addEventListener("click", () =>{
    
    main()

})
siguiente.addEventListener("click", () =>{
    siguienteKill()

})

reinicio.addEventListener("click", () =>{
    location.reload()
})



function main(){
    
    setTimeout(gritoMuerte, 800) 
    agregarClases()
    pintarListaVivos()
    let coderKilled = killCode()
    addPurgatorio(coderKilled)
    setTimeout(pintarListaPurgatorio, 3000) 
    pintarListaVivos()
    setTimeout(gameOver, 2000)
    setTimeout(splashBlood, 1600)
    setTimeout(quitarSplashBlood, 3600)
    console.log(purgatorio)
    console.log(listaNombres)
} 

function mainGame() {
    let mainLanding = document.getElementById("mainLanding")
    let mainGame = document.getElementById("mainGame")
    if (mainGame.style.display=="none"){
        mainGame.style.display="block"
    }
    if(mainLanding.style.display=="flex"){
    mainLanding.style.display="none"
    }
}

function pintarListaVivos(){
    let pantalla = ''
    listaNombres.forEach(item =>{
        pantalla += `<li>${item.nombre}</li>`
    })
    
    document.getElementById("lista").innerHTML = pantalla
}


function killCode(){
    let aleatorio = listaNombres[Math.floor(Math.random() * listaNombres.length)]
    for (let index = 0; index < listaNombres.length; index++) {
        if (listaNombres[index] === aleatorio) {
            listaNombres.splice(index, 1)  
        }
        
    }
    boton.style.display="none"
    return(aleatorio)
    
}

function addPurgatorio(aleatorio){
    purgatorio.unshift(aleatorio)
    console.log(aleatorio)
}

function pintarListaPurgatorio(){
    let pantallaPurgatorio = ''
    purgatorio.forEach(item =>{
        pantallaPurgatorio += `<li>${item.nombre}</li>`
    })
    
    document.getElementById("purgatorio").innerHTML = pantallaPurgatorio
    console.log()
}

function gritoMuerte(){
    let gritoMuerte = document.getElementById("audio-grito-muerte")
    gritoMuerte.play()

}

function siguienteKill(){
    let bus = document.getElementById("bus")
    let hombre = document.getElementById("hombre")
    let cabezaTodo= document.getElementById("cabezaTodo")
    let ojos = document.getElementById("ojos")
    let boca = document.getElementById("boca")
    let brazoDerecho = document.getElementById("brazoDerecho")
    let brazoIzquierdo = document.getElementById("brazoIzquierdo")
    let piernas = document.getElementById("piernas")
    let torso = document.getElementById("torso")
    
    bus.classList.remove("imagen-bus-animation")
    hombre.classList.remove("hombre")
    cabezaTodo.classList.remove("cabeza-todo")
    ojos.classList.remove("ojos-accion")
    boca.classList.remove("boca-accion")
    brazoIzquierdo.classList.remove("brazo-izquierdo-accion")
    brazoDerecho.classList.remove("brazo-derecho-accion")
    piernas.classList.remove("piernas-accion")
    torso.classList.remove("torso-accion")
    boton.style.display="block"
    siguiente.style.zIndex = "2"
    splash.classList.remove("splash-salida")
    splash.style.display="none"

}

function gameOver(){
    if(listaNombres.length == 0){
        let mainEnding = document.getElementById("mainEnding")
        let mainGame = document.getElementById("mainGame")
    if (mainGame.style.display=="block"){
        mainGame.style.display="none"
    }
    if(mainEnding.style.display=="none"){
    mainEnding.style.display="flex"
    }
        /*alert("Felicitaciones, eres un Serial Koder")*/
    }
    if(listaNombres.length == 0){
        boton.style.display = "none"
        siguiente.style.display = "none"
    }

}

function agregarClases(){
    let bus = document.getElementById("bus")
    let hombre = document.getElementById("hombre")
    let cabezaTodo= document.getElementById("cabezaTodo")
    let ojos = document.getElementById("ojos")
    let boca = document.getElementById("boca")
    let brazoDerecho = document.getElementById("brazoDerecho")
    let brazoIzquierdo = document.getElementById("brazoIzquierdo")
    let piernas = document.getElementById("piernas")
    let torso = document.getElementById("torso")
    bus.classList.add("imagen-bus-animation")
    hombre.classList.add("hombre")
    cabezaTodo.classList.add("cabeza-todo")
    ojos.classList.add("ojos-accion")
    boca.classList.add("boca-accion")
    brazoIzquierdo.classList.add("brazo-izquierdo-accion")
    brazoDerecho.classList.add("brazo-derecho-accion")
    piernas.classList.add("piernas-accion")
    torso.classList.add("torso-accion")
}

function splashBlood(){
    if(splash.style.display == "none"){
        splash.style.display = "block"
    }
}

function quitarSplashBlood(){
splash.classList.add("splash-salida")
}
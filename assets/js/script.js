document.getElementById('boton').addEventListener('click', function(){

    let tituloPrincipal = document.getElementById("titulo");
    let heading = document.getElementsByTagName("h2");
    let headingTres = document.getElementsByTagName("h3");
    let headingCuatro = document.getElementsByTagName("h4");
    let parrafo = document.getElementsByTagName("p");
    let contenedores = document.querySelectorAll(".container-fluid");
    let reemplazar = document.getElementById("reemplazo");
    let piePagina = document.querySelector(".fondo4");
    reemplazar.classList.replace("imagen", "nueva-clase")
    tituloPrincipal.style.color = "white";
    piePagina.style.backgroundColor = "black"

    
    for (var i = 0; i < heading.length; i++) {
        heading[i].style.color = "white";
    }

    for (var i = 0; i < headingTres.length; i++) {
        headingTres[i].style.color = "white";
    }

    for (var i = 0; i < headingCuatro.length; i++) {
        headingCuatro[i].style.color = "white";
    }

    for (var i = 0; i < parrafo.length; i++) {
        parrafo[i].style.color = "white";
    }

    for (var i = 0; i < contenedores.length; i++) {
        contenedores[i].style.backgroundColor = "black";
    }
    console.log('Esta funcionando el botón')

    
})

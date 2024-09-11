let menuVisible = false;
//FUNCIÓN QUE OCULTA O MUESTRA EL MENÚ
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //OCULTO MENU UNA VEZ QUE SELECCIONO LA OPCIÓN
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// FUNCION QUE APLICA LAS ANIMACIONES DE LAS HABILIDADES
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("cobol");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
    
}


//DETECTO EL SCROLLING PARA APLICAR LA ANIMACIÓN EN LA BARRA HABILIDADES
window.onscroll = function(){
    efectoHabilidades();
}
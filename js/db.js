const pregunta= document.querySelector('.contenedor');



//Listener

listeners();
function listeners(){
    pregunta.addEventListener('click',mostrar);
}



//funciones

function mostrar(e){
    if(e.target.classList.contains('accordion')){
        const panel=e.target.parentElement.querySelector('.panel');
        panel.classList.toggle('activo');
    }
}
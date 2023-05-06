// script llenado dinamico
const dialog = document.querySelector('.modal');
const contenidoModal= document.querySelector('.labels');
const tarjetas= document.getElementById('contenedor-tarjetas');
const botonCerrar=document.querySelector('.close');
const infoTarjetas={
  1:{
    nombre:'Hunters',
    detalles:'Espacio dedicado al aseo y cuidado de los campers y coworkers',
    disponibilidad:'uso libre'
  },
  2:{
    nombre:'Cafeteria Hunters',
    detalles:'Cubiculo ubicado en el espacio de hunteres pensado para ofrecer servicios de cafeteria',
    disponibilidad:'sujeto a horario'
  },
  3:{
    nombre:'8vo piso',
    detalles:'Una zona ubicada en el 8vo piso que cuenta con multiples servicios de cafeteria.',
    disponibilidad:'sujeta a horario'
  },
  4:{
    nombre:'Baños',
    detalles:'Espacio dedicado al aseo y cuidadados de los campers y coworkers',
    disponibilidad:'uso libre'
  }
};

//Listeners

listeners();
function listeners(){
  tarjetas.addEventListener('click',abrirModal);
  botonCerrar.addEventListener('click',cerrarModal);
}


//Funciones

//Abrir modal y suministrarle la informaicón
function abrirModal(e){
  e.preventDefault();
  if (e.target.classList.contains('boton')){
    for (info in infoTarjetas){
      if (info===e.target.getAttribute('id')){
        contenidoModal.innerHTML=`
        <tr>
          <td>${infoTarjetas[info].nombre}</td>
          <td>${infoTarjetas[info].detalles}</td>
          <td>${infoTarjetas[info].disponibilidad}</td>
        </tr>  
        `
      }
    }
    dialog.showModal();
  }
}

//Cerrar modal
function cerrarModal(e){
  e.preventDefault();
  dialog.close();
}



//script funcionalidad de carrito y tienda
const modal = document.querySelector('.cart-products');
const productos=document.querySelector('.products');
const carrito=document.querySelector('.cart');
const cerrarCarrito=document.querySelector('.close-btn');
const contenedorProductos=document.querySelector('.item-content');
const textoPrecio=document.querySelector('.cart-products h4 span');
const textoCantidad=document.querySelector('.cart p');
const listaProductos=document.querySelector('.cart-products'); 
cantidadPapas=0;
cantidadPastelitos=0;
cantidadCafe=0;


//listeners

listeners();
function listeners(){
    productos.addEventListener('click',añadicarrito);
    carrito.addEventListener('click',mostrarcarrito);
    cerrarCarrito.addEventListener('click',mostrarcarrito);
    listaProductos.addEventListener('click',eliminarProducto);
}



//funciones

function añadicarrito(e){
     if(e.target.classList.contains('botones')){
        const producto=e.target.parentElement;
        //Enviamos el curso para sacar la informacion
        obtenerInfoProducto(producto);
     }
}

function obtenerInfoProducto(producto){
    const infoProducto={
         imagen: producto.querySelector('img').src,
         nombre: producto.querySelector('p').textContent,
         precio: producto.querySelector('.precio').textContent,
         id:    producto.querySelector('a').id,
    }
     //Saber si ya existe el curso
     if ( infoProducto.nombre=='Papas'){
        if(cantidadPapas>0){
            cantidadPapas+=1;
            document.querySelector('.cantidad #papas').textContent=cantidadPapas;
            aumentarPrecio(infoProducto.precio);
        }else{
            cantidadPapas+=1;
            insertarProducto(infoProducto);
            aumentarPrecio(infoProducto.precio);
            aumentarCantidad(1);
        }
     }else if (infoProducto.nombre=='Pasteles'){
        if(cantidadPastelitos>0){
            cantidadPastelitos+=1;
            document.querySelector('.cantidad #pasteles').textContent=cantidadPastelitos;
            aumentarPrecio(infoProducto.precio);
        }else{
            cantidadPastelitos+=1;
            insertarProducto(infoProducto);
            aumentarPrecio(infoProducto.precio);
            aumentarCantidad(1);
         }
     }else if (infoProducto.nombre=='Cafe'){
        if(cantidadCafe>0){
            cantidadCafe+=1;
            document.querySelector('.cantidad #cafe').textContent=cantidadCafe;
            aumentarPrecio(infoProducto.precio);
        }else{
            cantidadCafe+=1;
            insertarProducto(infoProducto);
            aumentarPrecio(infoProducto.precio);
            aumentarCantidad(1);
         }
    }
}

function insertarProducto(producto){
    const fila=document.createElement('div');
    fila.className='item';
    fila.innerHTML=`
        <img src="${producto.imagen}" alt="">
        <p>${producto.nombre}</p>
        <p class="precio">${producto.precio}</p>
        <p class="cantidad">cantidad:<span id='${producto.id}'>1</span></p>
        <a class="delete-product">X</a>`;

    contenedorProductos.appendChild(fila);
}

function mostrarcarrito(e){
    modal.classList.toggle('activo');
}

function eliminarProducto(e){
    if(e.target.classList.contains('delete-product')){
        const cadena=e.target.parentElement.querySelector('.precio').textContent;
        const span=e.target.parentElement.querySelector('span');
        if(span.textContent>1 && span.id=='papas'){
            cantidadPapas-=1;
            document.querySelector('.cantidad #papas').textContent=cantidadPapas;
            aumentarPrecio(-cadena.substring(0,cadena.length-1));
        }else if(span.textContent==1 && span.id=='papas'){
            e.target.parentElement.remove();
            aumentarPrecio(-cadena.substring(0,cadena.length-1));
            aumentarCantidad(-1);
            cantidadPapas-=1;
        }else if(span.textContent==1 && span.id=='pasteles'){
            e.target.parentElement.remove();
            aumentarPrecio(-cadena.substring(0,cadena.length-1));
            aumentarCantidad(-1);
            cantidadPastelitos-=1;
        }else if(span.textContent>1 && span.id=='pasteles'){
            cantidadPastelitos-=1;
            document.querySelector('.cantidad #pasteles').textContent=cantidadPastelitos;
            aumentarPrecio(-cadena.substring(0,cadena.length-1));
        }else if(span.textContent>1 && span.id=='cafe'){
            cantidadCafe-=1;
            document.querySelector('.cantidad #cafe').textContent=cantidadCafe;
            aumentarPrecio(-cadena.substring(0,cadena.length-1));
        }else if(span.textContent==1 && span.id=='cafe'){
            e.target.parentElement.remove();
            cantidadCafe-=1;
            aumentarPrecio(-cadena.substring(0,cadena.length-1));
            aumentarCantidad(-1);
        }
        
    }
}


function aumentarPrecio(precio){
    let precioTotal=parseFloat(textoPrecio.textContent)+parseFloat(precio);
    textoPrecio.textContent=precioTotal;
}

function aumentarCantidad(operacion){
    let cantidadTotal=parseInt(textoCantidad.textContent)+operacion;
    textoCantidad.textContent=cantidadTotal;
}
const $nombre = document.querySelector('#nombre');
const $email = document.querySelector('#email');
const $mensaje = document.querySelector('#mensaje');
const $formulario = document.querySelector('.formulario');

$nombre.addEventListener('input',leerTexto)
$email.addEventListener('input',leerTexto)
$mensaje.addEventListener('input',leerTexto)
$formulario.addEventListener('submit', validarFormulario)


function leerTexto(e){
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

function validarFormulario(e){
    e.preventDefault();
    const {nombre, email, mensaje} = datos;
    if(nombre === "" || email === "" || mensaje === ""){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
    }else{
        mostrarAlerta('Mensaje enviado correctamente', 'correcto');
    }
}

function mostrarAlerta(mensaje, tipo){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(tipo === 'error'){
        alerta.classList.add('error');
        setTimeout(() => {
            alerta.remove();
        }, 3000);   
        
    }else{
        alerta.classList.add('correcto');
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
    $formulario.appendChild(alerta);
}

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


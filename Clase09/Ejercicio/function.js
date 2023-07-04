function validarNombre() {
  var nombre = document.getElementById("nombre").value;
  var mensaje = '';
  if (nombre.length < 7 ) {
    mensaje = "Debe tener al menos 6 letras. ";
  }
  if (nombre.indexOf(" ") === -1 ) {
    mensaje = mensaje + "Debe tener al menos un espacio."
  }

  if (mensaje != "" ) {
    document.getElementById("nombre-error").innerText = mensaje;
  }
  return mensaje;
}

function validarEmail() {
  var email = document.getElementById("email").value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var mensaje = '';
    if (!regex.test(email)) {
      mensaje = 'Debe tener un formato valido';
      document.getElementById('email-error').innerText = mensaje;
    }
    return mensaje;
}

function validarPass() {
  var password = document.getElementById('password').value;
  var regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  var mensaje = '';
  if (!regex.test(password)) {
    mensaje = 'Al menos 8 caracteres, formados por letras y números.';
    document.getElementById('password-error').innerText = mensaje;
  }
  return mensaje;
}

function validarPass2() {
  var password = document.getElementById('password2').value;
  var regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  var mensaje = '';
  if (!regex.test(password)) {
    mensaje = 'Al menos 8 caracteres, formados por letras y números.';
    document.getElementById('password2-error').innerText = mensaje;
  }
  return mensaje;
}


function validarEdad() {
  var edad = document.getElementById('edad').value;
  var mensaje = '';
  if (edad < 18 ) {
    mensaje = 'Debe tener 18 años o mas';
    document.getElementById('edad-error').innerText = mensaje;
  }
  return mensaje;
}

function limpiarcampos(valor) {
  document.getElementById(valor + '-error').innerText = "";
  console.log(valor + '-error');
}

function validarTelefono() {
  var telefono = document.getElementById('telefono').value;
  var regex = /^[0-9]{7,}$/;
  var mensaje = '';
  if (!regex.test(telefono)) {
    mensaje = 'Debe ser número de al menos 7 dígitos, sin espacios, guiones ni paréntesis.';
    document.getElementById('telefono-error').innerText = mensaje;
  }
  return mensaje;
}

function validarDireccion() {
  var direccion = document.getElementById('direccion').value ;
  var regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d\s]{0,}$/;
  var mensaje = '';
  if (direccion.length < 5 || direccion.indexOf(" ") === -1 || !regex.test(direccion)) {
    mensaje = 'Debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.';
    document.getElementById('direccion-error').innerText = mensaje;
  }
  return mensaje;
}

function validarCiudad() {
  var ciudad = document.getElementById('ciudad').value ;
  var mensaje = '';
  if (ciudad.length < 4 ) {
    mensaje = 'Debe tener al menos 3 caracteres';
    document.getElementById('ciudad-error').innerText = mensaje;
  }
  return mensaje;
}

function validarCP() {
  var cp = document.getElementById('cp').value ;
  var mensaje = '';
  if (cp.length < 4 ) {
    mensaje = 'Debe tener al menos 3 caracteres';
    document.getElementById('cp-error').innerText = mensaje;
  }
  return mensaje;
}

function validarDNI() {
  var dni = document.getElementById('dni').value ;
  var mensaje = '';
  if (dni.length < 7 || dni.length > 8 ) {
    mensaje = 'Debe tener entre 7 y 8 digitos';
    document.getElementById('dni-error').innerText = mensaje;
  }
  return mensaje;
}

function validarSubmit() {
  var errores = [];
  var nombre = validarNombre();
  if(nombre) errores.push('Nombre: ' + nombre);
  
  var email = validarEmail();
  if(email) errores.push('Email: ' + email);

  var contra = validarPass();
  if(contra) errores.push('Contraseña: ' + contra);

  var edad = validarEdad();
  if(edad) errores.push('Edad: ' + edad );

  var telefono  = validarTelefono();
  if(telefono) errores.push('Telefono: ' + telefono);

  var dire = validarDireccion()
  if(dire) errores.push('Direccion: ' + dire);

  var ciudad = validarCiudad();
  if(ciudad) errores.push('Ciudad: ' + ciudad);

  var cp = validarCP();
  if(cp) errores.push('Codigo Postal: ' + cp);

  var dni = validarDNI();
  if(dni) errores.push('DNI: ' + dni);

  if (errores.length> 0) {
    alert('Existen los siguientes errores: \n' + errores.join('\n'));    

  }
  else {
    var mensaje = [];
    mensaje.push('Nombre: ' + document.getElementById("nombre").value);
    mensaje.push('Email: ' + document.getElementById("email").value);
    mensaje.push('Contraseña: ' + document.getElementById("password").value);
    mensaje.push('Edad: ' + document.getElementById("Edad").value);
    mensaje.push('Telefono: ' + document.getElementById("telefono").value);
    mensaje.push('Direccion: ' + document.getElementById("direccion").value);
    mensaje.push('Codigo Postal: ' + document.getElementById("cp").value);
    mensaje.push('Ciudad: ' + document.getElementById("ciudad").value);
    mensaje.push('DNI: ' + document.getElementById("dni").value);
    
    alert('Datos: \n' + mensaje.join('\n'))

  }




  
}
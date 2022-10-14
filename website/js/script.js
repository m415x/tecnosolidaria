/*---------------------*/
/** MENÚ HAMBURGUESA **/
/*--------------------*/

// const toggleButton = document.getElementById('button-menu')
// const navWrapper = document.getElementById('nav')

// toggleButton.addEventListener('click',() => {
//   toggleButton.classList.toggle('close')
//   navWrapper.classList.toggle('show')
// })

// navWrapper.addEventListener('click',e => {
//   if(e.target.id === 'nav'){
//     navWrapper.classList.remove('show')
//     toggleButton.classList.remove('close')
//   }
// })


/*--------------------------*/
/** FORMULARIO DE CONTACTO **/
/*--------------------------*/

/* Mostrar input Asunto: "otro" */
function mostrar(id) {
  if (id == "otro") {
    document.getElementById("otro").style.display = ""
    document.form.other.focus()
  } else {
    document.getElementById("otro").style.display = "none"
  }
}

/* Validar Formulario */
function validarFormulario() {
  // Nombre
  if (document.form.firstname.value.length == 0) {
    alert("Debes completar tu nombre")
    document.form.firstname.focus()
    return 0
  }
  // Apellido
  if (document.form.lastname.value.length == 0) {
    alert("Debes completar tu apellido")
    document.form.lastname.focus()
    return 0
  }
  // Email
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  if (document.form.email.value.length == 0) {
    alert("Debes agregar una dirección de email")
    document.form.email.focus()
    return 0
  } else if (emailRegex.test(document.form.email.value) != true) {
    alert("Debes agregar una dirección de email válida")
    document.form.email.focus()
    return 0
  }
  // Teléfono
  let telRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g
  if (document.form.phonenumber.value.length > 0) {
    if (telRegex.test(document.form.phonenumber.value) != true) {
      alert("Debes agregar un número de teléfono válido")
      document.form.phonenumber.focus()
      return 0
    }
  }
  // Asunto
  if (document.form.lastname.value.length == 0) {
    alert("Debes completar tu apellido")
    document.form.lastname.focus()
    return 0
  }
    // Mensaje
    if (document.form.message.value.length == 0) {
      alert("Debes escribir un mensaje")
      document.form.message.focus()
      return 0
    }
  // Enviar formulario
  alert("Muchas gracias")
  document.form.submit()
}

/*--------------------------*/
/**        CAROUSEL        **/
/*--------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
      duration: 150,
      dist: -80,
      shift: 5,
      padding: 5,
      numVisible: 5,
      indicators: true,
      noWrap: false,
  });
});
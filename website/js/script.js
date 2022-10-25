/*----------*/
/** HEADER **/
/*----------*/

//Ocultar/mostrar menu al hacer scroll
let ubicacionPrincipal = window.scrollY;
window.onscroll = function () {
  let desplazamiento = window.scrollY;
  if (ubicacionPrincipal >= desplazamiento) {
    document.querySelector("#header").style.top = "0";
  } else {
    document.querySelector("#header").style.top = "-100px";
  }
  ubicacionPrincipal = desplazamiento;
};

//Menu hamburguesa
$(document).ready(function () {
  $(document).delegate('.open', 'click', function (event) {
    $(this).addClass('oppenned');
    $('.widget__cont').show();
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function (event) {
    $('.open').removeClass('oppenned');
    $('.widget__cont').hide()
  })
  $(document).delegate('.cls', 'click', function (event) {
    $('.open').removeClass('oppenned');
    $('.widget__cont').hide();
    event.stopPropagation();
  });
});

var mostrarWidget = document.querySelector("oppenned");
if (mostrarWidget == true) {
  document.querySelector("widget__cont").style.display = "";
} else {
  document.querySelector("#widget__cont").style.display = "none";
}
/*--------------------------*/
/** FORMULARIO DE CONTACTO **/
/*--------------------------*/

// Mostrar input Asunto: "otro"
function mostrar(id) {
  if (id == "otro") {
    document.querySelector("#otherSubject").style.display = "";
    document.form.otherSubject.focus();
  } else {
    document.querySelector("#otherSubject").style.display = "none";
  }
}

// Validar Formulario
function validarFormulario() {
  if (document.form.firstname.value.length == 0) {
    swal({
      title: "ERROR",
      text: "Debes completar tu nombre",
      icon: "error",
    }).then((aceptar) => {
      if (aceptar) {
        document.form.firstname.focus();
      }
    });
    // alert("Debes completar tu nombre");
    // document.form.firstname.focus();
    return 0;
  }
  if (document.form.lastname.value.length == 0) {
    swal({
      title: "ERROR",
      text: "Debes completar tu apellido",
      icon: "error",
    }).then((aceptar) => {
      if (aceptar) {
        document.form.lastname.focus();
      }
    });
    // alert("Debes completar tu apellido");
    // document.form.lastname.focus();
    return 0;
  }
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (document.form.email.value.length == 0) {
    swal({
      title: "ERROR",
      text: "Debes agregar una dirección de email",
      icon: "error",
    }).then((aceptar) => {
      if (aceptar) {
        document.form.email.focus();
      }
    });
    // alert("Debes agregar una dirección de email");
    // document.form.email.focus();
    return 0;
  } else if (emailRegex.test(document.form.email.value) != true) {
    swal({
      title: "ADVERTENCIA",
      text: "Debes agregar formato de email válido",
      icon: "warning",
    }).then((aceptar) => {
      if (aceptar) {
        document.form.email.focus();
      }
    });
    // alert("Debes agregar una dirección de email válida");
    // document.form.email.focus();
    return 0;
  }
  let telRegex =
    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/g;
  if (document.form.phonenumber.value.length > 0) {
    if (telRegex.test(document.form.phonenumber.value) != true) {
      swal({
        title: "ADVERTENCIA",
        text: "Debes agregar formato de teléfono válido",
        icon: "warning",
      }).then((aceptar) => {
        if (aceptar) {
          document.form.phonenumber.focus();
        }
      });
      // alert("Debes agregar un número de teléfono válido");
      // document.form.phonenumber.focus();
      return 0;
    }
  }
  if (document.form.message.value.length == 0) {
    swal({
      title: "ADVERTENCIA",
      text: "El mensaje está vacío",
      icon: "warning",
    }).then((aceptar) => {
      if (aceptar) {
        document.form.message.focus();
      }
    });
    // alert("Debes escribir un mensaje");
    // document.form.message.focus();
    return 0;
  }
  swal({
    title: "FORMULARIO ENVIADO",
    text: "Muchas gracias por tu mensaje",
    icon: "success",
  }).then((aceptar) => {
    if (aceptar) {
      document.form.submit();
    }
  });
  // alert("Muchas gracias");
  // document.form.submit();
}

/*--------------------------*/
/**        CAROUSEL        **/
/*--------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const elementosCarousel = document.querySelectorAll(".carousel");
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

/**-----**/
/** SPA **/
/**-----**/

function home() {
  document.querySelector("#inner").innerHTML = `
  <section class="home" id="home">
    <h2 class="home__head">¿Qué es Tecnosolidaria?</h2>
    <article class="home__cont">
      <p><strong class="home__cont--strong">Tecnosolidaria</strong> es una iniciativa que nace de la solidaridad.
        Tiene
        como misión reacondicionar celulares, tablets y computadoras, y donarlos a niños y niñas que necesiten de
        dispositivos tecnológicos para poder seguir estudiando. </p>
      <h3 class="home__subtitle">¿Quiénes somos?</h3>
      <p class="home__subtitle_p" >Mi nombre es Santos Bogo. Soy estudiante de ingeniería electrónica y cuento con conocimientos y experiencia en
        reparación de celulares y computadoras. Estoy iniciando un proyecto que tiene como objetivo ayudar a aquellas
        personas que necesitan equipos electrónicos, pero no tienen los recursos necesarios para adquirirlos... Por eso,
        si tenés computadoras, celulares o tablets que ya no uses o estén rotos, podés colaborar con este proyecto y
        contactarte con nosotros. Luego de repararlos y dejarlos en las mejores condiciones posibles, les encontraremos
        un nuevo dueño. Todos podemos colaborar poniendo nuestro granito de arena. Aceptamos todo tipo de donaciones.
      </p>
    </article>
    <img class="manos" src="./img/manosLevantadas.png" alt="manosLevantadas">
  </section>`;
}

// function carousel() {
//   document.querySelector("#inner").innerHTML = `
//     <section class="carousel-area" id="carousel">
//       <div class="container">
//         <div class="row">
//           <div class="col s12">
//             <h2>Nuestra vision en Fotos!</h2>

//             <div class="carousel center-align">
//               <div class="carousel-item">
//                 <h2 class="carousel-subtitulo">Trabajamos</h2>
//                 <div class="carousel-line-div"></div>
//                 <p class="carousel-texto">y ayudamos</p>
//                 <img src="./img/TecnoSolidaria-01.jpg" alt="Persona trajando en computadora">
//               </div>

//               <div class="carousel-item">
//                 <h2 class="carousel-subtitulo">Reparamos</h2>
//                 <div class="carousel-line-div"></div>
//                 <p class="carousel-texto">y reutilizamos</p>
//                 <img src="./img/TecnoSolidaria-02.jpg" alt="Persona reparando computadoras de escritorio">
//               </div>

//               <div class="carousel-item">
//                 <h2 class="carousel-subtitulo">Por nosotros</h2>
//                 <div class="carousel-line-div"></div>
//                 <p class="carousel-texto">y nuestro futuro</p>
//                 <img src="./img/TecnoSolidaria-03.jpg" alt="Un hombre y una nena reparando dispositivos electronicos">
//               </div>

//               <div class="carousel-item">
//                 <h2 class="carousel-subtitulo">Acortando</h2>
//                 <div class="carousel-line-div"></div>
//                 <p class="carousel-texto">brechas</p>
//                 <img src="./img/TecnoSolidaria-04.jpg" alt="Dos personas tomandose una foto">
//               </div>

//               <div class="carousel-item">
//                 <h2 class="carousel-subtitulo">Juntos</h2>
//                 <div class="carousel-line-div"></div>
//                 <p class="carousel-texto">somos mas</p>
//                 <img src="./img/TecnoSolidaria-05.jpg" alt="Manos juntas formando un circulo">
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>`;
// }

function about() {
  document.querySelector("#inner").innerHTML = `
  <section class="about" id="about">
  <h2 class="home__head">Contexto</h2>
  <div class="home__sec">
    <div class="home__sec--p">
      <img class="home__sec--pic" src="img/Reutilizacion.png" alt="reutilización"></img>
      <p>El avance tecnológico y la oferta constante del mercado nos impulsan, por un lado, a la compra de
      dispositivos con nuevas funciones y diseños, y por otro, a desechar los aparatos que estaban en uso. 
      Esta
      renovación de la tecnología trae aparejado un alarmante aumento de desechos eléctricos y electrónicos
      que
      se
      producen cada año. <br><br>
      El principal problema con los Activos IT en desuso está en la basura y la contaminación que puede
      producir al
      acumularse, dado que los Residuos de Aparatos Eléctricos y Electrónicos (RAEE's) contienen sustancias
      químicas
      que contaminan el medio ambiente y al mezclarse con el resto de la basura, desprenden metales tóxicos
      perjudiciales para la salud.<br><br>
      Atendiendo a esta cuestión, necesitamos concientizar a la población que los residuos electrónicos no
      son
      basura y que, por el contrario, la reutilización es la alternativa indicada para recuperar los aparatos
      eléctricos y electrónicos de una manera económica, técnica y ambientalmente más eficiente que el
      reciclaje.</p>
    </div>
  </div>
</section>

<section class="about" id="about">
  <h2 class="tit-curiosidades">La huella de carbono digital</h2>
  <div class="home__sec">
    <div class="home__sec--p2">
      <iframe class="home__sec--pic2" src="https://www.youtube.com/embed/Oe0lBRdKh_Y" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <p>
      El cálculo de la huella de carbono es una herramienta que nos permite conocer el volumen de gases de efecto invernadero que produce una actividad o servicio. Se mide en toneladas de CO2 emitidas y es esencial para poner en marcha iniciativas que nos permitan reducirla. <br><br>

      El consumo de energía por el uso de las TIC (Tecnologías de la Información y de la
      Comunicación) está avanzando de forma exponencial a nivel mundial, sus emisiones de CO2 se
      aproximan a las del sector de la aviación. Prácticas como olvidar los cargadores de batería
      enchufados a la red eléctrica, no cerrar las aplicaciones, mantener los salvapantallas activos o
      dejar activado permanentemente el Wi-Fi o el Bluetooth contribuyen a disminuir la vida útil de la
      batería de nuestros equipos y a consumir energía innecesariamente. <br><br>

      La basura tecnológica comienza a ser un grave problema. En la Unión Europea se dejan de utilizar
      al año más de 100 millones de teléfonos móviles; en nuestras casas se acumulan móviles y
      cargadores de batería que no se utilizan, pero se desconoce algo sorprendente: albergan materias
      primas valiosas como el oro, la plata o el cobre, y al mismo tiempo contienen sustancias altamente
      tóxicas (plomo, cadmio, compuestos bromados, etc.) que requieren normas para un reciclaje
      seguro. 
      </p>
    
    <div class="granito">
      <h2 class="tit-curiosidades">Nuestro granito de arena</h2>
      <p class="textogranito">
      Acercá tus residuos electrónicos y nosotros lo reacondicionamos para una nueva utilización.<br>
      Juntos podemos ayudar a cuidar el medioambiente y a acortar la brecha de desigualdad en el acceso a las tecnologías e información.
      </p>
    </div>
    <div class="huella">
      <img class="huellaimg" src="img/huella.jpg" alt="huella"></img>
    </div>
  </article>
</section>`;
}

function donate() {
  document.querySelector("#inner").innerHTML = `
    <section class="donate" id="donate">
      <h2 class="donate__head">Donaciones</h2>
      <article class="donate__cont">
      <p>Si te interesa nuestra propuesta y queres ayudarnos <b>BIENVENIDO SEAS.</b>
      Podes ayudarnos acercandote a nuestros centros de recepcion, donde nos encontraras trabajando y con un mate listo para compartir. <br />
      Si preferis colaborar desde otro lado, aportando a nuestro proyecto, tambien lo podes hacer! <br />
      Te dejamos lo tipos de donaciones que recibimos y no te olvides de seguirnos en nuestras redes o contactarnos a traves de nuestro formulario
      por cualquier duda</p>
      </article>
      <div class="donate__container">
        <div class="donate__item">
          <h3 class="donate__item-titulo">Celulares y Repuestos</h3>
          <ul class="donate__list">
            <li>Computadoras y/o notebook rotos o en desuso</li>
            <li>Celulares y/o tablets rotos o en desuso</li>
            <li>Componentes internos de computadoras, notebooks, celulares o tablets (motherboard, camaras, transitores, fuentes etc)</li>
            <li>Componentes cambiados en una reparacion de servicio tecnico oficial</li>
            <li>Perifericos de computadoras, notebooks, celulares, o tablets (cargadores, auriculares, parlantes, impresoras, teclados, mouses)</li>
          </ul>
        </div>
          
        <div class="donate__item">
          <h3 class="donate__item-titulo">Donaciones de dinero</h3>
          <ul class="donate__list">
            <li>Cuenta Bancaria del BNA (Banco Nacion)</li>
            <li>Mercado Pago</li>
            <li>PayPal</li>
            <li>Wester Union</li>
          </ul>
        </div>
      </div>
    </section>`;
}

function points() {
  document.querySelector("#inner").innerHTML = `
    <section class="points" id="points">
      <h2 class="points__head">Puntos de Entrega</h2>
      <article class="points__cont">
        <div class="iframe-div" style="height:400px; width:100%; display:inline-block; overflow:hidden;">
          <iframe class="custom-google-map" style="position:relative; top:-67px; border:none;" src="https://www.google.com/maps/d/embed?mid=1MYte5elAVCOD8aggGeYbfjKBuLspHZ8&hl=es-419&ehbc=2E312F" width="90%" height="500" scrolling="no"></iframe>
        </div>
      </article>
    </section>`;
}

function contact() {
  document.querySelector("#inner").innerHTML = `
    <section class="form__cont" id="contact">
      <h2 class="form__head--styles">Contacto</h2>
      <form class="form__cont--styles" action="#" method="post" name="form">
        <div class="form__cont--item form__cont--item1">
          <label for="firstname">Nombre <sup>*</sup></label>
          <input id="firstname" type="text" name="firstname" placeholder="Tu nombre">
        </div>
        <div class="form__cont--item form__cont--item2">
          <label for="lastname">Apellido <sup>*</sup></label>
          <input id="lastname" type="text" name="lastname" placeholder="Tu apellido">
        </div>
        <div class="form__cont--item form__cont--item3">
          <label for="email">Email <sup>*</sup></label>
          <input id="email" type="email" name="email" placeholder="p. ej.  ejemplo@email.com">
          <span id="email-ok" name="email-ok"></span>
        </div>
        <div class="form__cont--item form__cont--item4">
          <label for="phonenumber">Teléfono</label>
          <input id="phonenumber" type="tel" name="phonenumber" placeholder="p. ej.  11 5 1234567">
        </div>
        <div class="form__cont--item form__cont--item5">
          <label for="subject">Asunto</label>
          <select name="subject" id="subject" onChange="mostrar(this.value);">
            <option value="consulta">Consulta</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div class="form__cont--item form__cont--item6">
          <input type="text" name="otherSubject" id="otherSubject" style="display: none;" placeholder="Escribe el asunto">
        </div>
        <div class="form__cont--textarea form__cont--text">
          <label for="message">Mensaje <sup>*</sup></label>
          <textarea id="message" type="text" name="message" maxlength="300" placeholder="Máximo 300 caracteres"></textarea>
        </div>
        <div class="form__cont--subs">
          <input type="checkbox" id="subscription" value="subscription" checked>
          <label for="subscription">Recibir novedades sobre Tecnosolidaria</label>
        </div>
        <div class="form__btn">
          <input id="submit" class="form__btn--styles" type="button" name="submit" value="Enviar"
            onclick="validarFormulario()">
        </div>
      </form>
    </section>`;
}
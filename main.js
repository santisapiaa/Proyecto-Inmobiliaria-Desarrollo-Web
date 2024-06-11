$(document).ready(function () {
  $(".card button").hover(
    function () {
      $(this)
        .css("background-color", "white")
        .css("border-color", "black")
        .css("border", "1px solid")
        .css("margin-top", "1rem");
      $(this).find("p").css("color", "black");
    },
    function () {
      $(this).css("background-color", "").css("border", "");
      $(this).find("p").css("color", "").css("margin-top", "");
    }
  );
});

function mostrarHeader() {
  var header = `
      <div class="row">
          <img src="img/logo.png" alt="Logo de la Empresa" class="logo" />
          <p>ALENTI INMUEBLES</p>
      </div>
      <nav class="links">
          <div class="row">
              <a href="index.html"><p>Inicio</p></a>
              <a href="inmuebles.html"><p>Inmuebles</p></a>
              <a href="contactanos.html"><p>Contáctanos</p></a>
          </div>
      </nav>
  `;

  var headerElement = document.getElementsByTagName("header")[0];
  headerElement.innerHTML = header;
}

mostrarHeader();

function mostrarFooter() {
  var footer = `
      <div><p>© 2024 ALENTI</p></div>
        <div class="column">
          <div>
            <p>Redes Sociales</p>
          </div>
          <div>
            <a href="#"
              ><img src="./img/logo-face.svg" alt="Icono Facebook"
            /></a>
            <a href="https://www.instagram.com/alenti.inmuebles/"
              ><img src="./img/logo-ig.svg" alt="Icono Instagram"
            /></a>
            <a href="#"
              ><img src="./img/logo-whatsapp.svg" alt="Icono Whatsapp"
            /></a>
          </div>
        </div>
  `;

  var footerElement = document.getElementsByTagName("footer")[0];
  footerElement.innerHTML = footer;
}

mostrarFooter();

$(document).ready(function () {
  $(".card").hover(
    function () {
      $(this).addClass("hovered");
    },
    function () {
      $(this).removeClass("hovered");
    }
  );
});

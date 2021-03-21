//fecha
function validarFecha() {
  var text = document.getElementById("fecha").value;
  var dateformat = /\d{1,2}-\d{1,2}-\d{4}/gm;
  if (text.match(dateformat)) {
    alert("Entra");
  } else {
    alert("No Entra");
  }
}

function validar() {
  //Correo
  var correo = document.getElementById("Correo").value;
  //dividimos el correo en dos por el arroba por ejemplo:
  //0=nombre  2=hotmail.com
  var arrayCorreo1 = correo.split("@");

  //dividimos la segunda parte del correo en dos por el punto por ejemplo:
  //0=hotmail     1=com
  var arrayCorreo2 = arrayCorreo1[1].split(".");

  //expresion alphanumericos, punto y guión: /^[a-z0-9.-]+$/i
  if (/^[a-z0-9.-]+$/i.test(arrayCorreo1[0])) {
    //primera parte asegurada
    console.log("Antes del arroba correcto");

    if (/^[a-z0-9]+$/i.test(arrayCorreo2[0])) {
      console.log("Entre arroba y punto correcto");

      if (arrayCorreo2[1].length <= 3 && arrayCorreo2[1].length >= 2) {
        console.log("Correo Correcto");
      }
    }
  }
}

//Expresiones regulares
function escapeHTML() {
  var text = document.getElementById("escape").value;
  var replacements = [
    [/&/, "&amp"],
    [/"/, "&quot;"],
    [/</, "&lt;"],
    [/>/, "&gt;"],
  ];
  replacements.forEach(function (replace) {
    text = text.replace(replace[0], replace[1]);
  });
  alert(text);
}

//revertir nombres
function revertirNombre() {
  var nombre = document.getElementById("nombre").value;
  var nombreSep = nombre.split(" ");
  var nombreFinal = "";

  nombreFinal = nombreSep[1] + ", " + nombreSep[0];
  alert(nombreFinal);
}

//eliminar etiquetas peligrosas
function eliminarPeligros() {
  var cadena = document.getElementById("peligros").value;
  var regex = /<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi;

  var result = cadena.replace(regex, "");
  alert(result);
}

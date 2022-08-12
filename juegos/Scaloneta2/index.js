let INDEX_PREGUNTA = 0;
let puntaje = 0;
let limite = 0;

cargarPregunta(INDEX_PREGUNTA);

function cargarPregunta(index) {
  objetoPregunta = baseDePreguntas[index];
  opciones = [...objetoPregunta.distractores];

  opciones.push(objetoPregunta.respuesta);
  for (let i = 0; i < 4; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }

  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
  if ((objetoPregunta, imagen)) {
    document.getElementById("imagen").src = objetoPregunta.imagen;
    document.getElementById("imagen").style.display = "";
  } else {
    document.getElementById("imagen").style.display = "none";
  }
  document.getElementById("imagen").src = objetoPregunta.imagen;
  document.getElementById("opcion-1").innerHTML = opciones[0];
  document.getElementById("opcion-2").innerHTML = opciones[1];
  document.getElementById("opcion-3").innerHTML = opciones[2];
  document.getElementById("opcion-4").innerHTML = opciones[3];
}

async function seleccionarOpcion(index) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  if (validezRespuesta) {
    await Swal.fire({
      title: "Respuesta Correcta",
      text: "La respuesta es la corresta",
      icon: "success",
    });
    puntaje++;
  } else {
    await Swal.fire({
      title: "Respuesta Incorrecta",
      text: `La respuesta corresta es "${objetoPregunta.respuesta}"`,
      icon: "error",
    });
    limite++;
  }
  INDEX_PREGUNTA++;
  if (INDEX_PREGUNTA >= baseDePreguntas.length || limite == 2) {
    INDEX_PREGUNTA = 0;
    await Swal.fire({
      title: "Juego Terminado",
      text: `Tu puntaje fue de "${puntaje}/${baseDePreguntas.length}"`,
    });
  }
  cargarPregunta(INDEX_PREGUNTA);
}
function ayuda() {
  Swal.fire({
    title: "Ayuda",
    text: objetoPregunta.ayuda,
    imageUrl: objetoPregunta.ayudaImg,
    imageHeight: 300,
  });
}

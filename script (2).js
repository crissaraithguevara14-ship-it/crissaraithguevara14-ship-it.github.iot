// Lógica del formulario de Loona
function contratar() {
  const cliente = document.getElementById("cliente").value;
  const objetivo = document.getElementById("objetivo").value;
  const respuesta = document.getElementById("respuesta-loona");

  if (cliente === "" || objetivo === "") {
    respuesta.innerText = "🐺 Loona: 'Oye, llena los dos espacios. No soy adivina.'";
    return;
  }

  respuesta.innerText = `🐺 Loona: "Ya te anoté, ${cliente}. En cuanto Blitz deje de hacer tonterías iremos por ${objetivo}."`;
}

// Lógica del Mini-Juego
let personajeElegido = "";

function iniciarMision(personaje) {
  personajeElegido = personaje;
  const historia = document.getElementById("historia");
  const botones = document.getElementById("botones-juego");

  historia.innerText = `Cruzaste como ${personajeElegido}. ¡Aparecen agentes de D.H.O.R.K.S. frente a ti! ¿Qué haces?`;
  botones.innerHTML = `
    <button onclick="elegirAccion('sigilo')">Esconderse y atacar por sorpresa</button>
    <button onclick="elegirAccion('caos')">Atacar de frente sin pensar</button>
  `;
}

function elegirAccion(tipo) {
  const historia = document.getElementById("historia");
  const botones = document.getElementById("botones-juego");

  if (tipo === "sigilo" && personajeElegido === "Moxxie") {
    historia.innerText = "🎯 ¡ÉXITO! Moxxie elimina el objetivo sin hacer ruido y regresan al Infierno con el pago.";
  } else if (tipo === "caos" && personajeElegido === "Millie") {
    historia.innerText = "🪓 ¡BRUTAL! Millie derrota a todos los agentes con su hacha y completan el contrato.";
  } else if (personajeElegido === "Blitzo") {
    historia.innerText = "🐴 ¡CAOS TOTAL! Blitzo hace un desastre, pero logran saltar por el portal justo a tiempo.";
  } else {
    historia.innerText = "🚨 ¡ATRAPADOS! Ese no era el estilo de " + personajeElegido + ". D.H.O.R.K.S. los capturó.";
  }

  botones.innerHTML = `<button onclick="reiniciar()">🔄 Volver a jugar</button>`;
}

function reiniciar() {
  document.getElementById("historia").innerText = "Loona abrió el portal con el Grimorio. ¿Con quién cruzas?";
  document.getElementById("botones-juego").innerHTML = `
    <button onclick="iniciarMision('Blitzo')">Entrar con Blitzo</button>
    <button onclick="iniciarMision('Moxxie')">Entrar con Moxxie</button>
    <button onclick="iniciarMision('Millie')">Entrar con Millie</button>
  `;
}

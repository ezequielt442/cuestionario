function filtrarPreguntasIncorrectas(preguntas) {
    return preguntas.filter(pregunta => !pregunta.esCorrecta);
}

alert("English Level Test");
let contador = 0;

const preguntas = [
    {
        pregunta: "I ______ a bus on Mondays.",
        opciones: "1. 'm going to work with\n2. 'm going to work by\n3. go to work with\n4. go to work by",
        respuestaCorrecta: 4,
        esCorrecta: true
    },
    {
        pregunta: "Sorry, but this chair is ______.",
        opciones: "1. me\n2. mine\n3. my\n4. our",
        respuestaCorrecta: 2,
        esCorrecta: true
    },
    {
        pregunta: "'How old ______?' B: 'I ______.'",
        opciones: "1. are you / am 20 years old.\n2. have you / have 20 years old.\n3. are you / am 20 years.\n4. do you have / have 20 years.",
        respuestaCorrecta: 1,
        esCorrecta: true
    },
    {
        pregunta: "I ______ to the cinema.",
        opciones: "1. not usually go\n2. don't usually go\n3. don't go usually\n4. do not go usually",
        respuestaCorrecta: 2,
        esCorrecta: true
    },
    {
        pregunta: "Where ______ ?",
        opciones: "1. your sister works\n2. your sister work\n3. does your sister work\n4. do your sister work",
        respuestaCorrecta: 3,
        esCorrecta: true
    },
    {
        pregunta: "The test is ______ February.",
        opciones: "1. in\n2. at\n3. on\n4. over",
        respuestaCorrecta: 1,
        esCorrecta: true
    },
    {
        pregunta: "I eat pasta ______ week.",
        opciones: "1. twice in a\n2. twice a\n3. one time a\n4. once in a",
        respuestaCorrecta: 2,
        esCorrecta: true
    },
    {
        pregunta: "I don't have ______ free time.",
        opciones: "1. many\n2. any\n3. a lot\n4. some",
        respuestaCorrecta: 2,
        esCorrecta: true
    },
    {
        pregunta: "'_____ to the cinema tomorrow?'",
        opciones: "1. We will go\n2. Do we go\n3. We go\n4. Shall we go",
        respuestaCorrecta: 4,
        esCorrecta: true
    },
    {
        pregunta: "We went to the market ______ some vegetables.",
        opciones: "1. to buy\n2. for buy\n3. for to buy\n4. for buying",
        respuestaCorrecta: 1,
        esCorrecta: true
    },
    // Otras preguntas y sus respuestas
];

for (let i = 0; i < preguntas.length; i++) {
    const pregunta = preguntas[i];
    const respuesta = parseInt(prompt(pregunta.pregunta + '\n' + pregunta.opciones));

    if (respuesta === pregunta.respuestaCorrecta) {
        contador++;
    } else {
        pregunta.esCorrecta = false; // Marcar como incorrecta si la respuesta es incorrecta
    }
}

const mostrarRespuestas = prompt("¿Quieres ver las preguntas incorrectas al final del cuestionario? (si / no)");

if (mostrarRespuestas === "si") {
    const preguntasIncorrectas = filtrarPreguntasIncorrectas(preguntas);
    if (preguntasIncorrectas.length > 0) {
        for (let i = 0; i < preguntasIncorrectas.length; i++) {
            const pregunta = preguntasIncorrectas[i];
            alert("Pregunta: " + pregunta.pregunta + '\n' + pregunta.opciones + "\nRespuesta Correcta: " + pregunta.respuestaCorrecta);
        }
    } else {
        alert("Todas las respuestas son correctas.");
    }
} else {
    alert("Gracias por participar en el cuestionario. Tu puntuación es: " + contador + " respuestas correctas.");
}

if (contador < 5) {
    alert("Tu nivel es básico.");
} else if (contador >= 5 && contador <= 8) {
    alert("Tu nivel es intermedio.");
} else {
    alert("¡Felicidades! Tu nivel es avanzado.");
}



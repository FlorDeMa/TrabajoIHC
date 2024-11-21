//Chatbot
const chatBotToggler = document.querySelector(".chat-bot-toggler");
const chatbotContainer = document.querySelector(".chatbot-container");

chatBotToggler.addEventListener("click", () => {
    chatbotContainer.classList.toggle("show-chat-bot");
});

function chatbot(input) {
    let output = "";
    input = input.toLowerCase();

    if (input.includes("hola") || input.includes("ola")) {
        output = "¡Hola! ¿En qué puedo ayudarte hoy?";
    } else if (input.includes("bye") || input.includes("adiós")) {
        output = "Fue un placer ayudarte. ¡Hasta luego!";
    } else if (input.includes("gracias")) {
        output = "¡De nada! Estoy aquí para ayudarte.";
    } else if (input.includes("¿qué es greenspaces?") || input.includes("greenspaces")) {
        output = "GreenSpaces es una plataforma para revitalizar espacios verdes mediante eventos comunitarios.";
    } else if (input.includes("¿cómo puedo participar?")) {
        output = "Puedes participar registrándote en nuestra plataforma para descargar la app.";
    } else if (input.includes("¿cómo me registro?") || input.includes("registrarse")) {
        output = "Haz clic en 'Registrarse' en la parte superior de la página y completa tus datos.";
    } else if (input.includes("eventos disponibles") || input.includes("hay eventos")) {
        output = "Puedes ver los eventos disponibles en la sección 'Eventos' de nuestra página web.";
    } else if (input.includes("cómo gano puntos") || (input.includes("puntos") && input.includes("ganar"))) {
        output = "Ganas puntos participando en eventos y actividades de GreenSpaces.";
    } else if (input.includes("que puedo hacer con mis puntos")|| (input.includes("puntos") && input.includes("hacer"))) {
        output = "Puedes canjear tus puntos por promociones ofrecidas por empresas colaboradoras.";
    } else if (input.includes("cómo contacto soporte") || input.includes("soporte")) {
        output = "Puedes contactarnos a través del formulario de contacto en nuestra página.";
    } else if (input.includes("¿cómo organizo un evento?") || input.includes("organizar evento")) {
        output = "Si deseas organizar un evento, por favor contáctanos a través del formulario de contacto.";
    } else if (input.includes("¿cuánto cuesta participar?") || input.includes("precio")) {
        output = "Participar en los eventos de GreenSpaces es totalmente gratuito.";
    } else if (input.includes("promociones disponibles") || input.includes("canjear puntos")) {
        output = "Puedes ver las promociones disponibles en la sección 'Recompensas'.";
    } else if (input.includes("estadísticas") || input.includes("impacto")) {
        output = "En tu perfil, puedes ver estadísticas sobre tu impacto ambiental y los eventos en los que participaste.";
    } else if (input.includes("¿cómo puedo ser voluntario?") || input.includes("voluntario")) {
        output = "Para ser voluntario, regístrate y únete a los eventos en tu área.";
    } else if (input.includes("¿hay app móvil?") || input.includes("app")) {
        output = "Actualmente, solo tenemos una versión web, pero estamos trabajando en una app móvil.";
    } else if (input.includes("¿cómo cambio mi contraseña?")) {
        output = "Puedes cambiar tu contraseña desde la configuración de tu cuenta en tu perfil.";
    } else if (input.includes("¿dónde están ubicados?") || input.includes("ubicación")) {
        output = "GreenSpaces opera en múltiples ciudades. Puedes ver eventos cercanos en nuestra plataforma.";
    } else if (input.includes("¿qué tipo de eventos hay?")) {
        output = "Organizamos eventos de limpieza, reforestación y mantenimiento de áreas verdes.";
    } else if (input.includes("¿qué pasa si no puedo asistir a un evento?")) {
        output = "Si no puedes asistir, cancela tu participación desde el evento en tu perfil.";
    } else if (input.includes("¿cómo invito a mis amigos?")) {
        output = "Puedes compartir los eventos directamente desde nuestra plataforma mediante redes sociales.";
    } else if (input.includes("¿qué es un espacio verde?")) {
        output = "Un espacio verde es cualquier área con vegetación, como parques, jardines o reservas urbanas.";
    } else if (input.includes("¿qué pasa si pierdo mis puntos?")) {
        output = "Tus puntos están vinculados a tu cuenta y no se pierden a menos que los canjees.";
    } else if (input.includes("¿qué beneficios tengo como empresa?")) {
        output = "Como empresa, puedes mejorar tu RSE y obtener visibilidad al colaborar con GreenSpaces.";
    } else if (input.includes("¿cómo puedo editar mi perfil?")) {
        output = "Puedes editar tu perfil accediendo a la sección 'Configuración' en tu cuenta.";
    } else if (input.includes("¿puedo sugerir eventos?")) {
        output = "¡Claro! Nos encantaría conocer tus ideas. Escríbenos a través del formulario de contacto.";
    } else if (input.includes("¿cómo elimino mi cuenta?")) {
        output = "Puedes eliminar tu cuenta desde la configuración de tu perfil en cualquier momento.";
    } else if (input.includes("¿cuál es el objetivo de greenspaces?") || input.includes("objetivo")) {
        output = "Nuestro objetivo es revitalizar y mantener espacios verdes urbanos mediante la colaboración comunitaria.";
    } else if (input.includes("¿dónde se realizan los eventos?") || input.includes("ubicación de eventos")) {
        output = "Los eventos se realizan en diferentes espacios verdes de tu ciudad. Consulta la sección 'Eventos' para más detalles.";
    } else if (input.includes("¿qué beneficios tengo como usuario?")) {
        output = "Al participar, contribuyes al medio ambiente y puedes ganar recompensas a través de nuestro sistema de puntos.";
    } else if (input.includes("¿cómo puedo obtener más información?")) {
        output = "Puedes encontrar más información en la sección 'Acerca de nosotros' o contactarnos directamente.";
    } else if (input.includes("¿los eventos son seguros?") || input.includes("seguridad en eventos")) {
        output = "Sí, todos los eventos son organizados con protocolos de seguridad y supervisión.";
    } else if (input.includes("¿puedo sugerir un espacio verde?")) {
        output = "¡Claro! Usa el formulario de contacto para sugerir nuevos espacios verdes para futuros eventos.";
    } else if (input.includes("como se financia greenspaces") || input.includes("financia")) {
        output = "GreenSpaces se financia a través de donaciones y colaboraciones con empresas comprometidas con el medio ambiente.";
    } else if (input.includes("¿cómo puedo cancelar mi cuenta?")) {
        output = "Para cancelar tu cuenta, accede a la configuración de tu perfil y selecciona 'Eliminar cuenta'.";
    } else if (input.includes("¿cuántos puntos tengo?") || input.includes("mis puntos")) {
        output = "Puedes consultar tus puntos en la sección 'Mi Perfil' dentro de la plataforma.";
    } else if (input.includes("¿qué actividades hay?") || input.includes("tipos de actividades")) {
        output = "Actualmente, ofrecemos actividades como limpieza de parques, reforestación y mantenimiento de jardines.";
    } else if (input.includes("¿puedo ser patrocinador?") || input.includes("patrocinio")) {
        output = "¡Claro! Contáctanos para obtener más información sobre cómo tu empresa puede patrocinar eventos.";
    } else if (input.includes("¿cómo puedo donar materiales?") || input.includes("donar recursos")) {
        output = "Puedes donar materiales contactándonos a través de la sección 'Donaciones'.";
    } else if (input.includes("¿los eventos son familiares?")) {
        output = "¡Sí! La mayoría de nuestros eventos son aptos para todas las edades y fomentan la participación familiar.";
    } else if (input.includes("¿hay eventos cerca de mí?") || input.includes("eventos cercanos")) {
        output = "Puedes consultar los eventos cerca de tu ubicación en la sección 'Eventos' utilizando el filtro de ubicación.";
    } else if (input.includes("¿cuál es el impacto de greenspaces?") || input.includes("impacto ambiental")) {
        output = "GreenSpaces ha contribuido a la recuperación de múltiples espacios verdes y la mejora de la calidad ambiental en áreas urbanas.";
    } else if (input.includes("¿cómo se asegura la sostenibilidad de los proyectos?")) {
        output = "Trabajamos con comunidades locales y voluntarios para asegurar el mantenimiento continuo de los espacios verdes.";
    } else if (input.includes("¿qué pasa si no puedo asistir a un evento registrado?")) {
        output = "Si no puedes asistir, por favor cancela tu participación desde tu perfil para liberar el cupo.";
    } else if (input.includes("¿cómo se mide el éxito de los eventos?")) {
        output = "Evaluamos el éxito a través de indicadores como la cantidad de voluntarios, áreas restauradas y niveles de satisfacción.";
    } else if (input.includes("¿hay oportunidades de empleo en greenspaces?") || input.includes("trabajar con greenspaces")) {
        output = "Puedes revisar las oportunidades de empleo en la sección 'Carreras' de nuestra página web.";
    }
    else {
        output = "Lo siento, no entiendo tu pregunta. ¿Puedes intentarlo de nuevo?";
    }
    return output;
}

function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("user", "message");

    let userText = document.createElement("div");
    userText.classList.add("text");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");

    userText.innerHTML = message;

    userMessage.appendChild(userText);
    userMessage.appendChild(userAvatar);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");

    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;

    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
    let input = document.getElementById("input").value.trim();
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(() => {
            displayBotMessage(output);
        }, 1000);
        document.getElementById("input").value = "";
    }
}

document.getElementById("button").addEventListener("click", sendMessage);

document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

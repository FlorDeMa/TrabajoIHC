(function () {
    const titleQuestions = [...document.querySelectorAll(".name-Question")];
    console.log(titleQuestions);

    titleQuestions.forEach((question) => {
        question.addEventListener("click", () => {
        let height = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle("questions-padding--add");
        question.children[0].classList.toggle("questions-arrow--rotate");

        if (answer.clientHeight === 0) {
            height = answer.scrollHeight;
        }
        answer.style.height = `${height}px`;
        });
    });
})();


function chatbot(input) {
    let output = "";
    input = input.toLowerCase();

    if (input.includes("hola") || input.includes("ola")) {
        output = "Hola, ¿cómo estás? ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
    } else if (input.includes("bye") || input.includes("gracias")) {
        output = "Fue un placer ayudarte. ¡Hasta luego!";
    } else {
        output = "Lo siento, no entiendo tu pregunta. ¿Puedes intentarlo de nuevo?";
    }
    return output;
}

function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");

    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;

    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot");

    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;

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

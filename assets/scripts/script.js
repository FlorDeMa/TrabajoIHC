
//Eventos encontrados
const events = {
    1: {
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6499054500246!2d-77.12183312586329!3d-12.067591842287012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cbc2069a15ed%3A0xd1113b4a8a642d58!2sBenjamin%20Doig%20Lossio%20II%2C%20La%20Perla%2007016!5e0!3m2!1ses-419!2spe!4v1732112555355!5m2!1ses-419!2spe",
        name: "Evento La Perla",
        location: "Callao-La Perla",
        date: "15/03/2024",
        time: "4pm",
        description: "Limpieza de Parque"
    },
    2: {
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.712131138479!2d-77.08770227586506!3d-11.994409990926247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce6161fe659b%3A0xa0996da844d806ee!2sParque%20el%20Monumental%2C%20Villa%20Universitaria%2C%20San%20Mart%C3%ADn%20de%20Porres%2015108!5e0!3m2!1ses-419!2spe!4v1732112732795!5m2!1ses-419!2spe",
        name: "Evento Los Olivos- Parque monumental",
        location: "Los Olivos",
        date: "18/03/2024",
        time: "10am",
        description: "Plantación de Árboles"
    },
    3: {
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7808.726971300149!2d-77.03723598830332!3d-11.879758242957658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d0c09cb8120f%3A0x8c03a920600ed37!2sParque%20Santo%20Domingo%2C%20C.%20N%2C%20Carabayllo%2015318!5e0!3m2!1ses-419!2spe!4v1732113906197!5m2!1ses-419!2spe",
        name: "Evento Carabayllo",
        location: "Carabayllo- AV.Trapiche",
        date: "20/03/2024",
        time: "4pm",
        description: "Reciclaje Comunitario"
    }
};

AOS.init();

const eventSelector = document.getElementById("event-selector");
const eventMap = document.getElementById("event-map");
const eventName = document.getElementById("event-name");
const eventLocation = document.getElementById("event-location");
const eventDate = document.getElementById("event-date");
const eventTime = document.getElementById("event-time");
const eventDescription = document.getElementById("event-description");

eventSelector.addEventListener("change", (e) => {
    const selectedEvent = events[e.target.value];

    if (selectedEvent) {
        eventMap.src = selectedEvent.mapUrl;
        eventName.textContent = selectedEvent.name;
        eventLocation.textContent = selectedEvent.location;
        eventDate.textContent = selectedEvent.date;
        eventTime.textContent = selectedEvent.time;
        eventDescription.textContent = selectedEvent.description;
    }
});

// Testimonios
const testimonialsSlider = document.querySelector(".testimonials-slider");
const prevDot = document.getElementById("prev");
const nextDot = document.getElementById("next");
const cardsPerView = 3; // Número de tarjetas visibles por vista
const cardWidth = testimonialsSlider.firstElementChild.offsetWidth; // Ancho de una tarjeta
const totalCards = testimonialsSlider.children.length; // Número total de tarjetas
const maxScroll = (totalCards - cardsPerView) * cardWidth; // Máximo desplazamiento permitido

let currentScroll = 0;

// Actualizar botones según la posición actual
const updateDots = () => {
    prevDot.classList.toggle("active", currentScroll > 0);
    nextDot.classList.toggle("active", currentScroll < maxScroll);
};

// Mover hacia la derecha
nextDot.addEventListener("click", () => {
    if (currentScroll < maxScroll) {
        currentScroll += cardWidth * cardsPerView;
        currentScroll = Math.min(currentScroll, maxScroll); // No exceder el máximo
        testimonialsSlider.scrollTo({
            left: currentScroll,
            behavior: "smooth",
        });
        updateDots();
    }
});

// Mover hacia la izquierda
prevDot.addEventListener("click", () => {
    if (currentScroll > 0) {
        currentScroll -= cardWidth * cardsPerView;
        currentScroll = Math.max(currentScroll, 0); // No exceder el mínimo
        testimonialsSlider.scrollTo({
            left: currentScroll,
            behavior: "smooth",
        });
        updateDots();
    }
});

// Inicializar estado de botones
updateDots();

//Validacion de Contactanos
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
    const fname = form.elements["fname"].value;
    const flastName = form.elements["flastName"].value;
    const fphone = form.elements["fphone"].value;
    const fmessage = form.elements["fmessage"].value;
    const femail = form.elements["femail"].value;

    if (!fname || !flastName || !fphone || !fmessage || !femail) {
        event.preventDefault();
        alert("Por favor, complete todos los campos.");
    } else if (!validatePhone(fphone)) {
        event.preventDefault();
        alert("Por favor, ingrese un número de teléfono válido.");
    } else if (!validateEmail(femail)) {
        event.preventDefault(), alert("Por favor, ingrese un correo valido");
    } else {
    }
});

function validatePhone(fphone) {
    const phonePattern = /^[0-9]{9}$/; 
    return phonePattern.test(fphone);
}

function validateEmail(femail) {
    const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
    return re.test(String(femail).toLowerCase());
}

//Casos de Exito
const caseSlider = document.querySelector('.cases-slider');
const leftArrow = document.querySelector('.fa-angle-left');
const rightArrow = document.querySelector('.fa-angle-right');

function moveLeft() {
    caseSlider.scrollBy({
        left: -1200, 
        behavior: 'smooth'
    });
}

function moveRight() {
    caseSlider.scrollBy({
        left: 1200, 
        behavior: 'smooth'
    });
}

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);



const tempsInput = document.getElementById('temps-input');
const augmenterTempsButton = document.getElementById('augmenter-temps');
const diminuerTempsButton = document.getElementById('diminuer-temps');
const demarrerMinuteurButton = document.getElementById('demarrer-minuteur');
const stopMinuteurButton = document.getElementById('stop-minuteur');
const tempsRestantElement = document.getElementById('temps-restant');
const aiguilleHeures = document.querySelector('.aiguille-heures');
const aiguilleMinutes = document.querySelector('.aiguille-minutes');
const aiguilleSecondes = document.querySelector('.aiguille-secondes');

let tempsRestant = 0;
let intervalId = null;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateAiguilles(seconds) {
    const totalSeconds = tempsInput.value;
    const angle = (360 * seconds) / totalSeconds;
    aiguilleSecondes.style.transform = `rotate(${angle}deg)`;
    aiguilleMinutes.style.transform = `rotate(${angle / 60}deg)`;
    aiguilleHeures.style.transform = `rotate(${angle / 3600}deg)`;
}

augmenterTempsButton.addEventListener('click', () => {
    tempsRestant += 60;
    tempsInput.value = tempsRestant;
    tempsRestantElement.textContent = formatTime(tempsRestant);
});

diminuerTempsButton.addEventListener('click', () => {
    if (tempsRestant > 60) {
        tempsRestant -= 60;
        tempsInput.value = tempsRestant;
        tempsRestantElement.textContent = formatTime(tempsRestant);
    }
});

demarrerMinuteurButton.addEventListener('click', () => {
    tempsRestant = parseInt(tempsInput.value);
    intervalId = setInterval(() => {
        tempsRestant -= 1;
        tempsRestantElement.textContent = formatTime(tempsRestant);
        updateAiguilles(tempsRestant);
        if (tempsRestant <= 10) {
            tempsRestantElement.classList.add('countdown-animation');
        }
        if (tempsRestant === 0) {
            clearInterval(intervalId);
            alert('Temps écoulé !');
            tempsRestantElement.classList.remove('countdown-animation');
        }
    }, 1000);
    demarrerMinuteurButton.disabled = true;
    stopMinuteurButton.disabled = false;
});

stopMinuteurButton.addEventListener('click', () => {
    clearInterval(intervalId);
    demarrerMinuteurButton.disabled = false;
    stopMinuteurButton.disabled = true;
    tempsRestantElement.classList.remove('countdown-animation');
    tempsRestantElement.textContent = formatTime(parseInt(tempsInput.value));
    updateAiguilles(parseInt(tempsInput.value));
});

tempsInput.addEventListener('input', () => {
    tempsRestant = parseInt(tempsInput.value);
    tempsRestantElement.textContent = formatTime(tempsRestant);
    updateAiguilles(tempsRestant);
});

// Initialisation de l'affichage
tempsRestantElement.textContent = formatTime(0);
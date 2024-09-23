const chronometreElement = document.getElementById('chronometre');
const startStopButton = document.getElementById('start-stop');
const tourButton = document.getElementById('tour');
const resetButton = document.getElementById('reset');
const tempsListe = document.getElementById('temps-liste');

let tempsEcoule = 0;
let intervalId = null;
let isRunning = false;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemainder = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondsRemainder.toString().padStart(2, '0')}`;
}

function updateChronometre() {
    tempsEcoule += 1;
    chronometreElement.textContent = formatTime(tempsEcoule);
}

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(intervalId);
        startStopButton.textContent = 'Démarrer';
    } else {
        intervalId = setInterval(updateChronometre, 1000);
        startStopButton.textContent = 'Arrêter';
    }
    isRunning = !isRunning;
});

tourButton.addEventListener('click', () => {
    const tempsActuel = chronometreElement.textContent;
    const listItem = document.createElement('li');
    listItem.textContent = tempsActuel;
    tempsListe.appendChild(listItem);
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    tempsEcoule = 0;
    chronometreElement.textContent = formatTime(tempsEcoule);
    startStopButton.textContent = 'Démarrer';
    isRunning = false;
    tempsListe.innerHTML = '';
});
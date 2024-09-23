const alarmeHeureInput = document.getElementById('alarme-heure');
const alarmeMessageInput = document.getElementById('alarme-message');
const ajouterAlarmeButton = document.getElementById('ajouter-alarme');
const alarmeListe = document.getElementById('alarme-liste');

let alarmes = [];

function updateAlarmes() {
    alarmeListe.innerHTML = ''; // Effacer la liste avant de la mettre à jour

    alarmes.forEach((alarme, index) => {
        const now = new Date();
        const alarmeDate = new Date();
        alarmeDate.setHours(parseInt(alarme.heure.split(':')[0]));
        alarmeDate.setMinutes(parseInt(alarme.heure.split(':')[1]));
        alarmeDate.setSeconds(0);

        const listItem = document.createElement('li');
        listItem.classList.add('alarme-item');
        
        const heureDiv = document.createElement('div');
        heureDiv.classList.add('alarme-heure');
        heureDiv.textContent = alarme.heure;

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('alarme-message');
        messageDiv.textContent = alarme.message;

        const statusDiv = document.createElement('div');
        statusDiv.classList.add('alarme-status');

        if (now > alarmeDate) {
            statusDiv.textContent = 'Passée';
            statusDiv.classList.add('passee');
        } else {
            const diff = alarmeDate - now;
            const heuresRestantes = Math.floor(diff / (1000 * 60 * 60));
            const minutesRestantes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            statusDiv.textContent = `Dans ${heuresRestantes}h ${minutesRestantes}min`;
        }

        listItem.appendChild(heureDiv);
        listItem.appendChild(messageDiv);
        listItem.appendChild(statusDiv);
        alarmeListe.appendChild(listItem);

        // Déclencher l'alarme si l'heure est atteinte
        if (now.getHours() === alarmeDate.getHours() &&
            now.getMinutes() === alarmeDate.getMinutes() &&
            now.getSeconds() === 0) {
            alert(`Alarme !\n${alarme.message}`);
        }
    });
}

ajouterAlarmeButton.addEventListener('click', () => {
    const heure = alarmeHeureInput.value;
    const message = alarmeMessageInput.value;

    if (heure && message) {
        alarmes.push({ heure, message });
        updateAlarmes();
        alarmeHeureInput.value = '00:00';
        alarmeMessageInput.value = '';
    }
});

// Mettre à jour la liste des alarmes toutes les secondes
setInterval(updateAlarmes, 1000);
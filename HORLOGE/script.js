function updateHorloge() {
    const now = new Date();
    const heures = now.getUTCHours() + 1; // UTC + 1
    const minutes = now.getUTCMinutes();
    const secondes = now.getUTCSeconds();

    const horlogeElement = document.getElementById('horloge');
    horlogeElement.textContent = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;
}

// Mettre à jour l'heure toutes les secondes
setInterval(updateHorloge, 1000);

// Mettre à jour l'heure immédiatement au chargement de la page
updateHorloge();
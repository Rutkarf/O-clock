<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minuteur</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="minuteur-container">
        <div class="cercle"></div>
        <div class="cercle-intérieur"></div>
        <div class="aiguille aiguille-heures"></div>
        <div class="aiguille aiguille-minutes"></div>
        <div class="aiguille aiguille-secondes"></div>
        <div class="chiffres chiffre-12">12</div>
        <div class="chiffres chiffre-3">3</div>
        <div class="chiffres chiffre-6">6</div>
        <div class="chiffres chiffre-9">9</div>
        <div id="temps-restant">00:00</div>
    </div>
    <div class="controles">
        <input type="number" id="temps-input" value="0">
        <div class="boutons-container">
            <button id="augmenter-temps">+</button>
            <button id="diminuer-temps">-</button>
        </div>
        <div class="boutons-container">
            <button id="demarrer-minuteur">Démarrer</button>
            <button id="stop-minuteur" disabled>Stop</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
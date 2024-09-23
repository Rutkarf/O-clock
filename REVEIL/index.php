<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réveil</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="reveil-container">
        <h2>Ajouter une alarme</h2>
        <div class="input-group">
            <input type="time" id="alarme-heure" value="00:00">
            <input type="text" id="alarme-message" placeholder="Message">
            <button id="ajouter-alarme">Ajouter</button>
        </div>

        <h2>Alarmes programmées</h2>
        <ul id="alarme-liste"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
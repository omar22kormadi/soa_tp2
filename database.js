const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données SQLite
// Le fichier maBaseDeDonnees.sqlite sera créé s'il n'existe pas
const db = new sqlite3.Database('./maBaseDeDonnees.sqlite', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connecté à la base de données SQLite.');
        // Création de la table personnes si elle n'existe pas
        db.run('CREATE TABLE IF NOT EXISTS personnes (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT NOT NULL, adresse TEXT)', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        
    }
});
       
    }
});

module.exports = db;
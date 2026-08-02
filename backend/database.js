const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'jansetu.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err);
    } else {
        console.log('Connected to SQLite database at:', dbPath);
        db.run(`
            CREATE TABLE IF NOT EXISTS complaints (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                category TEXT NOT NULL,
                location TEXT NOT NULL,
                status TEXT DEFAULT 'assigned',
                urgency TEXT DEFAULT 'Medium',
                createdAt TEXT,
                updatedAt TEXT
            )
        `);
    }
});

module.exports = db;

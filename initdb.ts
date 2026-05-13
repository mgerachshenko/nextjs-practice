import sql from 'better-sqlite3';

export const db = sql('surveys.db');

// Basic database, no dummy data since user needs to create forms and
// fill these fields themselves in the submitForm page
db.prepare(`
    CREATE TABLE IF NOT EXISTS surveys (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        country TEXT NOT NULL,
        email TEXT NOT NULL,
        thoughts TEXT NOT NULL
    )
`).run();
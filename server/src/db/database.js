const Database = require('better-sqlite3');

// Initialise database
const db = new Database('database.sqlite', { verbose: console.log });

// Create users table
const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    registration_date TEXT NOT NULL,
    country TEXT NOT NULL,
    service_level TEXT NOT NULL CHECK(service_level IN ('basic', 'premium', 'elite'))
);`;

db.exec(createUsersTable);

// Create the 'transactions' table
const createTransactionsTable = `
CREATE TABLE IF NOT EXISTS transactions (
    transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    service_id INTEGER NOT NULL,
    price REAL NOT NULL,
    service_date TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);`;

db.exec(createTransactionsTable);

module.exports = db;
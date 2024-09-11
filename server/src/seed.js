// dependencies
const db = require('./db/database');
const { faker } = require('@faker-js/faker');

// generate a random service level from the 3 options
const getRandomServiceLevel = () => {
    const serviceLevels = ['basic', 'premium', 'elite'];
    return serviceLevels[Math.floor(Math.random() * serviceLevels.length)];
};

// Insert 100 fake users - all fields filled
for (let i = 0; i < 100; i++) {
    const name = faker.person.fullName();
    const registrationDate = faker.date.recent().toISOString().split('T')[0];  // ISO formatted date
    const country = faker.location.country();
    const serviceLevel = getRandomServiceLevel();

    const insertUser = db.prepare(`
        INSERT INTO users (name, registration_date, country, service_level)
        VALUES (?, ?, ?, ?)
    `);
    
    insertUser.run(name, registrationDate, country, serviceLevel);
}

// Insert 1000 fake transactions
for (let i = 0; i < 1000; i++) {
    const userId = Math.floor(Math.random() * 100) + 1; // Random user ID between 1 and 100
    const serviceId = Math.floor(Math.random() * 10) + 1; // Random service ID between 1 and 10
    const price = parseFloat((Math.random() * 100).toFixed(2)); // Random price between 0 and 100
    const serviceDate = faker.date.recent().toISOString().split('T')[0];  

    const insertTransaction = db.prepare(`
        INSERT INTO transactions (user_id, service_id, price, service_date)
        VALUES (?, ?, ?, ?)
    `);
    
    insertTransaction.run(userId, serviceId, price, serviceDate);
}

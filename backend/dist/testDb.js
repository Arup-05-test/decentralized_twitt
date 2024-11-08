"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./config/database");
database_1.sequelize.authenticate()
    .then(() => {
    console.log('Database connection successful.');
})
    .catch((error) => {
    console.error('Unable to connect to the database:', error);
});

import { sequelize } from './config/database';

sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

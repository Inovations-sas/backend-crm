require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'backend_crm',
    host: process.env.DB_HOSTNAME || 'localhost',
    dialect: process.env.DB_DIALECT || 'mariadb',
    define: {
      timestamps: false,

      // Genera claves foraneas de este tipo user_id en vez de userId
      underscored: true
    }
  },
  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'backend_crm',
    host: process.env.DB_HOSTNAME || 'localhost',
    dialect: process.env.DB_DIALECT || 'mariadb',
  },
  production: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'backend_crm',
    host: process.env.DB_HOSTNAME || 'localhost',
    dialect: process.env.DB_DIALECT || 'mariadb',
  },
}

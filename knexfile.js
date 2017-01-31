// Update with your config settings.
const settings = require('./settings');
module.exports = {

  development: {
    client: 'pg',
    connection: {
      user     : settings.user,
      password : settings.password,
      database : settings.database,
      host     : settings.hostname,
      port     : settings.port,
      ssl      : settings.ssl
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'ddajthn431jpmn',
      user:     'mdqsitflivgvdo',
      password: 'd300f3cd589abab18044da2c1275803c445d87375f9a190917ace2cfd733f522'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'ddajthn431jpmn',
      user:     'mdqsitflivgvdo',
      password: 'd300f3cd589abab18044da2c1275803c445d87375f9a190917ace2cfd733f522'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

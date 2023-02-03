module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfef6fkgqg46rpnt12d0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'sample_sw3a'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', '0nSiRwoOGO7JIznfRR55SKjwhutZQB7m'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

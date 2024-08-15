import knex from 'knex';

const db = knex({
  //Tipo de bd
  client: 'pg',
  connection: {
    // Dirección de la base de datos
    host: '127.0.0.1',
    //Puerto de postgress
    port: 5432,
    //Usuario default
    user: 'postgres',
    //Contraseña de la base
    password: '123',
    //Nombre de la base de datos
    database: 'Veterinaria',
  },
});

export default db;

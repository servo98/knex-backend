import express from 'express';
import db from './database.js';

const PORT = 8001;

const api = express();

api.use(express.json());

api.get('/', (req, res) => {
  res.json({
    msg: 'API viva',
  });
});
//CRUD

/**
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */

//Ruta para crear owner (CREATE)
api.post('/owners', async (req, res) => {
  const ownerData = req.body;
  //Crear un nuevo owner en la base de datos
  const newOwner = await db('owners').insert(ownerData).returning('*');

  res.json({
    owner: newOwner,
  });
});

//Ruta para consultar owners (READ)

//Ruta para consultar owner por su id

//Ruta para actualizar owner por su id (UPDATE)

//Ruta para borrar owner por su id (DELETE)

api.listen(PORT, () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});

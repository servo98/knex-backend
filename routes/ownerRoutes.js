import db from '../database.js';
import { Router } from 'express';

const ownerRouter = Router();

//Ruta para crear owner (CREATE)
ownerRouter.post('/', async (req, res) => {
  const ownerData = req.body;
  //Crear un nuevo owner en la base de datos
  const newOwner = await db('owners').insert(ownerData).returning('*');

  res.json({
    owner: newOwner,
  });
});

//Ruta para consultar owners (READ)
ownerRouter.get('/', async (req, res) => {
  //consultar owners a la base de datos
  /**
   * SELECT [campos]
   * FROM [tabla]
   */
  const owners = await db.select('*').from('owners');

  res.json({
    owners,
  });
});

//Ruta para consultar owner por su id
ownerRouter.get('/:ownerId', async (req, res) => {
  const owner_id = req.params.ownerId;

  /**
   * SELECT *
   * FROM owners
   * WHERE
   *    owner_id =
   */
  const owner = await db.select('*').from('owners').where({
    owner_id,
  });

  res.json({ owner });
});

//Ruta para actualizar owner por su id (UPDATE)
ownerRouter.put('/:ownerId', async (req, res) => {
  const owner_id = req.params.ownerId;

  const ownerData = req.body;

  /**
   * UPDATE tabla
   * SET propiedades
   * WHERE
   */
  const updated = await db('owners')
    .update(ownerData)
    .where({
      owner_id,
    })
    //Si no pones esto solo te regresa la cantida dde registros cambiados
    .returning('*');

  res.json({
    updated,
  });
});

//Ruta para borrar owner por su id (DELETE)

ownerRouter.delete('/:ownerId', async (req, res) => {
  const owner_id = req.params.ownerId;

  await db('owners').delete().where({
    owner_id,
  });

  res.json({
    msg: `Owner con id ${owner_id} ha sido eliminado`,
  });
});

export default ownerRouter;

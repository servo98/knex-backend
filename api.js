import express from 'express';
import ownerRouter from './routes/ownerRoutes.js';

const PORT = 8001;

const api = express();

api.use(express.json());

api.get('/', (req, res) => {
  res.json({
    msg: 'API viva',
  });
});

//Rutas owners agrupadas
api.use('/owners', ownerRouter);

api.listen(PORT, () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});

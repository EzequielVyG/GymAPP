// server.js (en la raíz de la carpeta backend)
import express from 'express';
import cors from 'cors';

const app = express();

// Permite solicitudes desde cualquier origen
app.use(cors());

const mockData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// Ruta de ejemplo
app.get('/api/data', (req, res) => {
  res.json({ mockData });
});

// Escucha en el puerto 3000
app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});

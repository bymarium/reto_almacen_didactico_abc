import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

import exampleRoutes from './routes/exampleRoutes';

// ...

app.use('/', exampleRoutes);

import mysql from 'mysql';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'reto12345',
  database: 'almacen_didactico_abc'
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

export default connection;

process.on('SIGINT', () => {
  connection.end((err) => {
    if (err) {
      console.error('Error al cerrar la conexión a la base de datos:', err);
      process.exit(1);
    }
    console.log('Conexión a la base de datos cerrada');
    process.exit();
  });
});


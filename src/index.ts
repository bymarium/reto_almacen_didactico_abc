import express from 'express';
import mysql from 'mysql';
import productRoutes from './routes/product.routes';
import clientRoutes from './routes/client.routes';
import categoryRoutes from './routes/category.routes';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.use('/product', productRoutes);
app.use('/client', clientRoutes);
app.use('/category', categoryRoutes);

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

  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
});

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

export default connection;

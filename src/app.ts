import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Rotas
app.use('/users', userRoutes);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch

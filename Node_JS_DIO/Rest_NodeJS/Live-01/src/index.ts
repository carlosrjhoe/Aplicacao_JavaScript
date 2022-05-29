import express from 'express';
import userRouter from './routes/users.route';
userRouter

const app = express();

app.use(userRouter);

app.get('/status', (req, res, next) => {
  res.status(200).send('Olá Mundo!, Vamos começar a aprogramar...')
});

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000, Executei!');
});
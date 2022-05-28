import express from 'express';
const app = express();

app.get('/status', (req, res, next) => {
  res.status(200).send('Olá Mundo!')
});

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000, Executei!');
});

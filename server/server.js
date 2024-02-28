import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Olá! Este é o servidor Express.');
});

// Endpoint SSE
app.get('/api/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendData = () => {
    const data = {
      title: 'Evento SSE',
      message: 'Novo evento SSE!'
    };
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  // Enviar notificação
  const intervalId = setTimeout(sendData, 1000);

  // Limpar intervalo quando a conexão é fechada
  req.on('close', () => {
    clearInterval(intervalId);
    console.log('Conexão SSE fechada');
  });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

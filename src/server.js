const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const tarefaRoutes = require('./routes/tarefaRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('API ToDo List funcionando');
});

app.use('/tarefas', tarefaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


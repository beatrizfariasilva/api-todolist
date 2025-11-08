const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();

// listar tarefas
router.get('/', async (req, res) => {
  const tarefas = await prisma.tarefa.findMany();
  res.json(tarefas);
});

// criar tarefa
router.post('/', async (req, res) => {
  const { titulo, descricao } = req.body;
  const novaTarefa = await prisma.tarefa.create({
    data: { titulo, descricao },
  });
  res.json(novaTarefa);
});

// atualizar tarefa
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { concluida } = req.body;
  const tarefaAtualizada = await prisma.tarefa.update({
    where: { id: Number(id) },
    data: { concluida },
  });
  res.json(tarefaAtualizada);
});

// deletar tarefa
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.tarefa.delete({ where: { id: Number(id) } });
  res.json({ message: 'Tarefa removida!' });
});

module.exports = router;

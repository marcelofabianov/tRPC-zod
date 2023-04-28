import { createRouter } from 'trpc';
import { z } from 'zod';
import express from 'express';

const app = express();
const router = createRouter();

// Define o esquema de validação do trpc
const helloWorldSchema = z.object({
  name: z.string(),
});

// Define a rota de exemplo
router.query('helloWorld', {
  input: helloWorldSchema,
  async resolve({ input }) {
    return `Hello, ${input.name}!`;
  },
});

// Adiciona as rotas do trpc no servidor
app.use('/api/trpc', router.router);

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

// Importar o Express e o CORS
const express = require('express');
const cors = require('cors');

// Criar uma instância do Express
const app = express();

// Configurar o CORS
app.use(cors({
  origin: 'http://localhost:4200', // Permite apenas solicitações do seu frontend Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));

// Rota de exemplo para criar uma conta
app.post('/v1/accounts/create', (req, res) => {
  // Lógica para criar uma conta
  res.json({ message: 'Account created successfully!' });
});

// Iniciar o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
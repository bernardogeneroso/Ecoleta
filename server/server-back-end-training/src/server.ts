import express from "express";

const app = express();

app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Receber uma ou mais informações do back-end
// POST: Criar informações no back-end
// PUT: Atualizar informações que já existem
// DELTE: Remover informações no back-end

// Exemplos
// POST http://localhost:3333/users = Criar utilizador
// GET http://localhost:3333/users = Receber utilizadores
//GET http://localhost:3333/users/8 = Receber dados de um utilizador

// Request Param: Parâmetros que são enviados pela rota, que identificam o recurso
// Query Param: Parâmetros que são enviados pela rota, normalemnte são opcionais para o uso de filtros.
// Request Body: Parâmetros para crião/atuzalização de informações.

const users = [
  "Bernardo",
  "Duarte",
  "Gonçalo",
  "Maurice",
  "Manel",
  "Maria",
  "Daniel",
];

app.get("/users", (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.toLowerCase().includes(search.toLowerCase()))
    : users;

  // JSON
  return response.json(filteredUsers);
});

app.get("/users/:id", (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user);
});

app.post("/users", (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

app.listen(3333);

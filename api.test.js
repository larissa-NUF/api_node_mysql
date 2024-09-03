const supertest = require('supertest');
const {app, server} = require('./index');

describe('Teste GET /users', () => {
  it('deve responder com status 200 e um array válido de usuários', async () => {
    const response = await supertest(app).get('/users/');

    // Verifica se o status é 200
    expect(response.statusCode).toBe(200);

    // Verifica se o conteúdo da resposta é um array
    expect(Array.isArray(response.body)).toBeTruthy();

    // Verifica se o array não está vazio (opcional)
    expect(response.body.length).toBeGreaterThan(0);

    // Verifica a estrutura de um usuário (ajuste conforme sua estrutura de dados)
    response.body.forEach(user => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('email');
    });

  });
});
afterAll(() => {
    server.close()
})

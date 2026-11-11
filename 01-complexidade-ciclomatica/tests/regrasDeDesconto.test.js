const calcularDesconto = require("../src/calcularDesconto");

// Cobre todos os caminhos da versão original, para garantir que a
// refatoração manteve exatamente o mesmo comportamento.
describe("Desafio 1: todas as faixas da tabela de descontos", () => {
  test.each([
    ["premium, valor > 1000 e mais de 5 anos", { tipo: 'premium', anosCadastro: 6 }, 2000, 400],
    ["premium, valor > 1000 e exatamente 5 anos", { tipo: 'premium', anosCadastro: 5 }, 2000, 300],
    ["premium, valor > 1000 e poucos anos", { tipo: 'premium', anosCadastro: 1 }, 2000, 300],
    ["premium, valor exatamente 1000", { tipo: 'premium', anosCadastro: 10 }, 1000, 100],
    ["premium, valor entre 500 e 1000", { tipo: 'premium', anosCadastro: 10 }, 800, 80],
    ["premium, valor exatamente 500", { tipo: 'premium', anosCadastro: 10 }, 500, 25],
    ["premium, valor baixo", { tipo: 'premium', anosCadastro: 10 }, 100, 5],
    ["gold, valor > 1000", { tipo: 'gold' }, 2000, 200],
    ["gold, valor exatamente 1000", { tipo: 'gold' }, 1000, 20],
    ["gold, valor baixo", { tipo: 'gold' }, 100, 2],
    ["comum", { tipo: 'comum' }, 5000, 0],
    ["tipo inexistente herdado de Object", { tipo: 'toString' }, 5000, 0],
  ])("%s", (_descricao, cliente, valor, esperado) => {
    expect(calcularDesconto(cliente, valor)).toBeCloseTo(esperado);
  });
});

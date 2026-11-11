const encontrarProdutosComuns = require("../src/encontrarProdutosComuns");

describe("Desafio 2: comportamento e escala", () => {
  test("mantém a ordem da listaA e funciona com strings", () => {
    expect(encontrarProdutosComuns(["cafe", "leite", "pao"], ["pao", "cafe"]))
      .toEqual(["cafe", "pao"]);
  });

  test("retorna vazio quando não há itens em comum", () => {
    expect(encontrarProdutosComuns([1, 2], [3, 4])).toEqual([]);
  });

  test("duas listas de 100 mil itens em menos de 100 ms", () => {
    // Na versão O(n²) seriam 10 bilhões de comparações.
    const a = Array.from({ length: 100000 }, (_, i) => i);
    const b = Array.from({ length: 100000 }, (_, i) => i + 50000);

    const inicio = Date.now();
    const comuns = encontrarProdutosComuns(a, b);
    const duracao = Date.now() - inicio;

    expect(comuns).toHaveLength(50000);
    expect(duracao).toBeLessThan(100);
  });
});

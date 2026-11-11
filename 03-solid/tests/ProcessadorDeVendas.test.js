const ProcessadorDeVendas = require("../src/ProcessadorDeVendas");
const ValidadorDePedido = require("../src/ValidadorDePedido");
const CalculadoraDeTotal = require("../src/CalculadoraDeTotal");

// Testes isolados: banco e e-mail são substituídos por dublês,
// o que só é possível porque as dependências são injetadas (DIP).
function criarProcessador() {
  const repositorio = { salvar: jest.fn().mockResolvedValue() };
  const notificador = { notificar: jest.fn().mockResolvedValue() };
  const processador = new ProcessadorDeVendas({
    validador: new ValidadorDePedido(),
    calculadora: new CalculadoraDeTotal(),
    repositorio,
    notificador,
  });

  return { processador, repositorio, notificador };
}

describe("Desafio 3: ProcessadorDeVendas com dependências injetadas", () => {
  test("salva e notifica a venda processada", async () => {
    const { processador, repositorio, notificador } = criarProcessador();
    const pedido = { id: 7, clienteEmail: "b@b.com", itens: [{ preco: 100, quantidade: 2 }] };

    const venda = await processador.processarVenda(pedido);

    expect(venda).toEqual({ ...pedido, total: 200, status: "pago" });
    expect(repositorio.salvar).toHaveBeenCalledWith(venda);
    expect(notificador.notificar).toHaveBeenCalledWith(venda);
  });

  test("rejeita pedido sem itens sem salvar nem notificar", async () => {
    const { processador, repositorio, notificador } = criarProcessador();

    await expect(processador.processarVenda({ id: 8, itens: [] }))
      .rejects.toThrow("Pedido sem itens");
    expect(repositorio.salvar).not.toHaveBeenCalled();
    expect(notificador.notificar).not.toHaveBeenCalled();
  });
});

describe("Desafio 3: CalculadoraDeTotal", () => {
  const calculadora = new CalculadoraDeTotal();

  test("aplica 10% de desconto acima de 1000", () => {
    expect(calculadora.calcular([{ preco: 600, quantidade: 2 }])).toBe(1080);
  });

  test("não aplica desconto em exatamente 1000", () => {
    expect(calculadora.calcular([{ preco: 500, quantidade: 2 }])).toBe(1000);
  });
});

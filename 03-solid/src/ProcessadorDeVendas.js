// Orquestrador da venda.
//
// DIP: não cria nenhuma dependência. Recebe tudo pelo construtor
// (injeção de dependência) e conhece apenas os contratos:
//   validador.validar(pedido)
//   calculadora.calcular(itens)
//   repositorio.salvar(venda)
//   notificador.notificar(venda)
// Assim, banco e e-mail podem ser trocados (ou simulados nos testes)
// sem alterar esta classe.
class ProcessadorDeVendas {
  constructor({ validador, calculadora, repositorio, notificador }) {
    this.validador = validador;
    this.calculadora = calculadora;
    this.repositorio = repositorio;
    this.notificador = notificador;
  }

  async processarVenda(pedido) {
    this.validador.validar(pedido);

    const total = this.calculadora.calcular(pedido.itens);
    const venda = { ...pedido, total, status: "pago" };

    await this.repositorio.salvar(venda);
    await this.notificador.notificar(venda);

    return venda;
  }
}

module.exports = ProcessadorDeVendas;

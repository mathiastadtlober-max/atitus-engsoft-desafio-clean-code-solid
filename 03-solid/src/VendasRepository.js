// SRP: única responsabilidade é persistir vendas.
// Implementação de infraestrutura (simulada com console.log).
// Qualquer objeto com o método async salvar(venda) pode substituí-la.
class VendasRepository {
  async salvar(venda) {
    console.log(`Salvando pedido ${venda.id}...`);
  }
}

module.exports = VendasRepository;

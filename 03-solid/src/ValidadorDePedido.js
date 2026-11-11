// SRP: única responsabilidade é validar o pedido.
class ValidadorDePedido {
  validar(pedido) {
    if (!pedido.itens || pedido.itens.length === 0) {
      throw new Error("Pedido sem itens");
    }
  }
}

module.exports = ValidadorDePedido;

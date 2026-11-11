// SRP: única responsabilidade é calcular o total do pedido,
// aplicando a regra de desconto.
const VALOR_MINIMO_PARA_DESCONTO = 1000;
const FATOR_COM_DESCONTO = 0.9; // 10% de desconto

class CalculadoraDeTotal {
  calcular(itens) {
    const subtotal = itens.reduce(
      (soma, item) => soma + item.preco * item.quantidade,
      0
    );

    return subtotal > VALOR_MINIMO_PARA_DESCONTO
      ? subtotal * FATOR_COM_DESCONTO
      : subtotal;
  }
}

module.exports = CalculadoraDeTotal;

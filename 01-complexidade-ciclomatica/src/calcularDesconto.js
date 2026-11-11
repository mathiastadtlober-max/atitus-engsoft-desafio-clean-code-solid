/**
 * Table-Driven Design: as regras de desconto ficam em uma tabela,
 * não em ifs aninhados. Para cada tipo de cliente há uma lista de
 * regras avaliadas em ordem; a primeira que se aplica define a taxa.
 *
 * Para mudar uma faixa ou criar um novo tipo de cliente, basta
 * editar a tabela. A função calcularDesconto não precisa mudar.
 */
const SEMPRE = () => true;

const REGRAS_DE_DESCONTO = new Map([
  [
    'premium',
    [
      { aplica: (cliente, valor) => valor > 1000 && cliente.anosCadastro > 5, taxa: 0.20 },
      { aplica: (cliente, valor) => valor > 1000, taxa: 0.15 },
      { aplica: (cliente, valor) => valor > 500, taxa: 0.10 },
      { aplica: SEMPRE, taxa: 0.05 },
    ],
  ],
  [
    'gold',
    [
      { aplica: (cliente, valor) => valor > 1000, taxa: 0.10 },
      { aplica: SEMPRE, taxa: 0.02 },
    ],
  ],
]);

function calcularDesconto(cliente, valor) {
  const regras = REGRAS_DE_DESCONTO.get(cliente.tipo) ?? [];
  const regra = regras.find(({ aplica }) => aplica(cliente, valor));

  return regra ? valor * regra.taxa : 0;
}

module.exports = calcularDesconto;

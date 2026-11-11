/**
 * ✅ Otimizado de O(n * m) para O(n + m)
 *
 * Antes: para cada item de listaA, um segundo loop percorria toda a
 * listaB (for dentro de for) => n * m comparações.
 *
 * Agora: a listaB é convertida uma única vez em um Set (O(m)).
 * Depois, cada item de listaA é consultado com Set.has(), que é
 * O(1) em média, então percorrer listaA custa O(n).
 * Total: O(n + m), ou seja, tempo linear.
 */
function encontrarProdutosComuns(listaA, listaB) {
  const produtosDeB = new Set(listaB);

  return listaA.filter((produto) => produtosDeB.has(produto));
}

module.exports = encontrarProdutosComuns;

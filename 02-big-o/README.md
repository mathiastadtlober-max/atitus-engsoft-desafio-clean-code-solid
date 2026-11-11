# ⏱️ Desafio 02: Performance e Big-O

Em Engenharia de Software, não basta que o código funcione; ele deve ser eficiente. Algoritmos com complexidade quadrática **O(n²)** escalam mal e podem causar gargalos de performance.

## 🎯 O Desafio

A função `encontrarProdutosComuns.js` utiliza dois loops aninhados (`for` dentro de `for`), resultando em uma complexidade **O(n * m)**.

### Requisitos:
1.  **Otimize para O(n):** Utilize uma estrutura de dados de busca rápida (como `Set` ou `Map`) para que o algoritmo execute em tempo linear.
2.  **Eficiência:** O teste inclui uma verificação de tempo para garantir que a solução é performática com grandes volumes de dados.

## 🚀 Comandos

```bash
npm install
npm test
```

## ✅ Solução

- `listaB` é convertida uma vez em um `Set` (O(m)); depois `listaA` é filtrada com `Set.has()`, que é O(1) em média (O(n)).
- Complexidade final: **O(n + m)**, linear, no lugar de O(n * m).
- `tests/escalabilidade.test.js` processa duas listas de 100 mil itens em menos de 100 ms (seriam 10 bilhões de comparações na versão com dois `for`).
- Diferença de borda: se um valor aparecia repetido em `listaB`, a versão original o repetia no resultado (uma vez por repetição). Com o `Set`, as repetições de `listaB` não multiplicam o resultado.

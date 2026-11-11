# 🧩 Desafio 01: Complexidade Ciclomática

A **Complexidade Ciclomática (CC)** mede a quantidade de caminhos independentes que o código pode seguir. Um código com CC alta é difícil de testar, entender e manter.

## 🎯 O Desafio

O arquivo `src/calcularDesconto.js` possui uma função com múltiplos `ifs` aninhados (Arrow Anti-pattern). Sua tarefa é refatorá-la para reduzir a carga cognitiva.

### Requisitos:
1.  **Reduza os níveis de indentação.**
2.  **Utilize Table-Driven Design:** Tente usar um objeto ou array para mapear as regras de negócio em vez de estruturas condicionais encadeadas.
3.  **Mantenha a funcionalidade:** Os testes em `tests/calcularDesconto.test.js` devem continuar passando.

## 🚀 Comandos

```bash
npm install
npm test
```

## ✅ Solução

- As regras saíram dos `ifs` aninhados para a tabela `REGRAS_DE_DESCONTO` (um `Map` de tipo de cliente → lista de `{ aplica, taxa }`).
- A função apenas busca as regras do tipo e usa a primeira que se aplica: `regras.find(...)`. Sem aninhamento, com um único nível de indentação.
- Novo tipo de cliente ou nova faixa = nova linha na tabela, sem mexer na função.
- O `Map` evita que tipos como `"toString"` encontrem propriedades herdadas de `Object`.
- `tests/regrasDeDesconto.test.js` cobre todas as faixas e limites (500, 1000, 5 anos). Esses testes passam tanto na versão original quanto na refatorada, o que confirma que o comportamento não mudou.

# 🏛️ Desafio 03: SOLID (SRP & DIP)

O design orientado a objetos robusto depende de princípios que garantam o baixo acoplamento e a alta coesão.

## 🎯 O Desafio

O arquivo `src/SistemaDeVendas.js` é um exemplo de **Script Monolítico** ou "Objeto Deus". Ele mistura validação, cálculo de impostos/descontos, persistência e notificação.

### Requisitos:
1.  **SRP (Single Responsibility Principle):** Separe a lógica em classes menores (ex: `Pedido`, `VendasRepository`, `NotificadorService`).
2.  **DIP (Dependency Inversion Principle):** O orquestrador da venda não deve criar instâncias de serviços de infraestrutura (como o banco ou e-mail). Ele deve receber essas dependências via **Injeção de Dependência**.
3.  **Testabilidade:** O código refatorado deve ser fácil de testar isoladamente.

## 🚀 Comandos

```bash
npm install
npm test
```

## ✅ Solução

| Classe | Responsabilidade (SRP) |
| --- | --- |
| `ValidadorDePedido` | Validar se o pedido tem itens |
| `CalculadoraDeTotal` | Somar os itens e aplicar 10% de desconto acima de 1000 |
| `VendasRepository` | Persistir a venda (infraestrutura, simulada) |
| `NotificadorService` | Avisar o cliente por e-mail (infraestrutura, simulada) |
| `ProcessadorDeVendas` | Orquestrar a venda: validar → calcular → salvar → notificar |
| `SistemaDeVendas` | *Composition Root*: monta o processador com as implementações concretas |

- **DIP:** o `ProcessadorDeVendas` não cria nenhuma dependência. Ele recebe tudo pelo construtor e conhece só os métodos (`validar`, `calcular`, `salvar`, `notificar`). Trocar o banco ou o e-mail não exige alterar o orquestrador.
- `SistemaDeVendas` é o único ponto que escolhe as classes concretas. Por isso o teste original (`new SistemaDeVendas()`) continua passando sem alterações.
- **Testabilidade:** `tests/ProcessadorDeVendas.test.js` testa o orquestrador com dublês (`jest.fn()`) no lugar do banco e do e-mail, e confere que um pedido inválido não é salvo nem notificado.

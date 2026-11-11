// SRP: única responsabilidade é notificar o cliente.
// Implementação de infraestrutura (simulada com console.log).
// Qualquer objeto com o método async notificar(venda) pode substituí-la.
class NotificadorService {
  async notificar(venda) {
    console.log(`Enviando e-mail para ${venda.clienteEmail}...`);
  }
}

module.exports = NotificadorService;

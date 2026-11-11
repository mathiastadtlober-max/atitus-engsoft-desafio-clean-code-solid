const ProcessadorDeVendas = require("./ProcessadorDeVendas");
const ValidadorDePedido = require("./ValidadorDePedido");
const CalculadoraDeTotal = require("./CalculadoraDeTotal");
const VendasRepository = require("./VendasRepository");
const NotificadorService = require("./NotificadorService");

// Composition Root: único ponto do sistema que escolhe as
// implementações concretas e as injeta no orquestrador.
// O ProcessadorDeVendas continua sem conhecer nenhuma delas.
// Dependências passadas aqui substituem as padrão.
class SistemaDeVendas extends ProcessadorDeVendas {
  constructor(dependencias = {}) {
    super({
      validador: new ValidadorDePedido(),
      calculadora: new CalculadoraDeTotal(),
      repositorio: new VendasRepository(),
      notificador: new NotificadorService(),
      ...dependencias,
    });
  }
}

module.exports = SistemaDeVendas;

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtrativosSchema extends Schema {
  up () {
    this.create('atrativos', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.string('endereco').notNullable()
      table.string('cidade').notNullable()
      table.string('descricao').notNullable()
      table.string('tipo').notNullable()
      table.decimal('nota', 4, 2).notNullable()
      table.decimal('preco').notNullable()
      table.decimal('latitude', 9, 6).notNullable()
      table.decimal('longitude', 9, 6).notNullable()
     
      table.timestamps()
    })
  }

  down () {
    this.drop('atrativos')
  }
}

module.exports = AtrativosSchema

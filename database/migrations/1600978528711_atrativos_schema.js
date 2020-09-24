'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtrativosSchema extends Schema {
  up () {
    this.create('atrativos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('atrativos')
  }
}

module.exports = AtrativosSchema

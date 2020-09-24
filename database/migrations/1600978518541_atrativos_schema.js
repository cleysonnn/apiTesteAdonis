'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtrativosSchema extends Schema {
  up () {
    this.table('atrativos', (table) => {
      // alter table
    })
  }

  down () {
    this.table('atrativos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AtrativosSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatieresSchema extends Schema {
  up () {
    this.create('matieres', (table) => {
      table.increments()
      table.string('nom_matiere')
      table.timestamps()
    })
  }

  down () {
    this.drop('matieres')
  }
}

module.exports = MatieresSchema

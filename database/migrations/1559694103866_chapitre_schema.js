'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChapitreSchema extends Schema {
  up () {
    this.create('chapitres', (table) => {
      table.increments()
      table.string('nom_chapitre')
      table.integer('matiere_id').unsigned().references('id').inTable('matieres')
      table.timestamps()
    })
  }

  down () {
    this.drop('chapitres')
  }
}

module.exports = ChapitreSchema

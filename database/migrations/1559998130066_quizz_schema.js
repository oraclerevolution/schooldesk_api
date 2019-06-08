'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuizzSchema extends Schema {
  up () {
    this.create('quizzes', (table) => {
      table.increments()
      table.string('nom_quizz')
      table.integer('chapitre_id').unsigned().references('id').inTable('chapitres')
      table.timestamps()
    })
  }

  down () {
    this.drop('quizzes')
  }
}

module.exports = QuizzSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable()
      table.string('email', 100).notNullable().unique()
      table.string('telephone').notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('provider_id').nullable()
      table.string('provider').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema

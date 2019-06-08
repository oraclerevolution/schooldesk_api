'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Quizz extends Model {

    chapitres(){
        return this.belongsTo('App/Models/Chapitre');
    }
}

module.exports = Quizz

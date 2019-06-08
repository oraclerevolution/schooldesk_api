'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Chapitre extends Model {

    matieres(){
        return this.belongsTo('App/Models/Matiere')
    }

    quizz(){
        return this.hasMany('App/Model/Quizz')
    }

}

module.exports = Chapitre

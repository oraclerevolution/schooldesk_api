'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Matiere = use('App/Models/Matiere')
class Chapitre extends Model {

    matieres(){
        return this.belongsTo(Matiere)
    }
}

module.exports = Chapitre

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Matiere extends Model {

    users(){
        return this.belongsTo('App/Models/User');
    }

    chapitres(){
        return this.hasMany('App/Models/Chapitre');
    }
}

module.exports = Matiere

'use strict'

const Matiere = use('App/Models/Matiere');
const Database = use('Database');

class MatiereController {

    async matiereList({response}){

        //fetch all subjects
        const matieres = await Matiere.query().fetch()
        return response.json({ matieres: matieres.toJSON() })
    }

    async recupChapitre({response, params}){
        const id = params.id
        // looking for subject in DB
        const chapitres = await Database.from('chapitres').where({ matiere_id: id })
        return response.json({ chapitres: chapitres })
    }

    async deleteMatiere({response, session, params}){
        const matiere = await Matiere.find(params.id)

        await matiere.delete()
        session.flash({ message: 'Votre matiere a ete supprimé' })
        return response.redirect('back')
    }
}

module.exports = MatiereController

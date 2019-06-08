'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//lien d'inscription
Route.post('/signup', 'UserController.store').validator('CreateUser');
//lien de connexion
Route.post('/login', 'UserController.login').validator('LoginUser');
//appeler la liste des matieres
Route.get('/allmatieres', 'MatiereController.matiereList')
Route.get('matiere/:id', 'MatiereController.recupChapitre')
//supprimer une matiere
Route.get('/matiere/delete/:id', 'MatiereController.deleteMatiere')
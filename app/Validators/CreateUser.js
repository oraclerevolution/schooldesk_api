'use strict'

class CreateUser {
  get rules () {
    return {
      'username': 'required',
      'email': 'required|unique:users',
      'telephone': 'required|unique:users',
      'password': 'required'
    }
  }

  get message(){
    return {
      'required': 'Le champ {{field}} est requis',
      'unique': "Désolé, le champ {{field}} a déjà été utilisé"
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error)
      .flashAll();

    return this.ctx.response.redirect('back');
  }
}

module.exports = CreateUser

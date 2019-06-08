'use strict'

const User = use('App/Models/User');

class UserController {

    async store({ request, response, auth }){
       try {
           const data = request.only(['username', 'email', 'telephone', 'password'])

           const userExists = await User.findBy('email', data.email)

           if(userExists){
               return response
                .status(400)
                .send({ message: {error: 'User already registered' } })
           }

           const user = await User.create(data)
           return user
       } catch (err) {
           return response
            .status(err.status)
            .send(err)
       }
    }

    async login ({ request, session, response, auth }){
        const { email, password } = request.all();

        try {
            await auth.attempt(email, password);
            return response.redirect('/')
        } catch (error) {
            session.flash({ loginError: 'Les identifiants ne sont pas justes' })
            return response.redirect('/')
        }
    }
}

module.exports = UserController

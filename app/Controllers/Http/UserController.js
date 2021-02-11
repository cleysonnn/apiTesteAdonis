"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["username", "email", "password"])

    const user = await User.create(data)

    return user
  }


  async UserALL (){
    const usuarios =await User.all()
    

    return usuarios
  }

}

module.exports = UserController

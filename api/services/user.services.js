//para conectar la base datos en node
//usando sequelize, generamos consultas usando programacion orientada a objetos
const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data)
    return newUser;
  }

  async find() {
    const response = await models.User.findAll()
    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if (!user) {
      throw boom.notFound('User not found')
    }
    return user;
  }

  async update(id, changes) {
    const user = await models.User.findByPk(id)
    const response = await user.update(changes);
    return response;
  }

  async delete(id) {
    const user = await models.User.findByPk(id)
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;


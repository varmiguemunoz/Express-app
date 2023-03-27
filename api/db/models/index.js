//archivo donde van todo el set up de nuestros modelos

const { User, userSchema } = require('./user.model')
const {productSchema, Products } = require ('./products.model')


function setupModels(sequelize) {
  User.init (userSchema, User.config(sequelize))
  Products.init (productSchema, Products.config(sequelize))
}


module.exports = setupModels;

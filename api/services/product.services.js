const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize')

class ProductService {

constructor() {}

async create (data) {
  const newProduct = await models.Products.create(data)
  return newProduct;
}

async find() {
  const response = await models.Products.findAll()
  return response;
}

async findOne(id) {
  const product = await models.Products.findByPk(id)
  if(!product) {
    throw boom.notFound('Product not found');
  }
  return product;
}

async update(id, changes) {
  const product = await models.Products.findByPk(id)
  const response = await product.update(changes);
  return response;
}


async delete(id) {
  const product = await models.Products.findByPk(id)
  await product.destroy();
  return { id }
}

}

module.exports = ProductService;

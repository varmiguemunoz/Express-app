//validaciones que se juntan en una funcion en los middlewares
const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const description = Joi.string().min(3).max(200);;

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description
})

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image.required(),
  description: description.required()
})

const getProductSchema = Joi.object({
  id: id.required(),
})


module.exports = {getProductSchema, createProductSchema, updateProductSchema}

const express = require ('express');
const ProductService = require('./../services/product.services')
const { validatorHandler } = require('./../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schemas')

const router = express.Router();
const services = new ProductService();


router.get('/', async (req, res, next) => {
  try {
    const products = await services.find();
  res.json(products)
  } catch (error) {
    next(error)
  }
})


router.get('/:id',
validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
    const { id } = req.params;
    const product = await services.findOne(id);
    res.json(product);
    } catch(error) {
      next(error)
    }
});


router.post('/',
validatorHandler(createProductSchema, 'body'),
async (req, res, next) => {
  try{
    const body = req.body;
  const newProduct = await services.create(body);
  res.status(201).json(newProduct)
  } catch(error) {
    next(error)
  }

})

router.patch('/:id',
validatorHandler(updateProductSchema, 'body'),
async (req, res, next) => {
  try {
  const { id } = req.params;
  const body = req.body;
  const product = await services.update(id, body);
  res.json(product)
  } catch(error) {
  next(error)
  }

})


router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
  const response = await services.delete(id)
  res.json(response)
  } catch (error) {
    next(error)
  }

})



module.exports = router;

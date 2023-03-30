const { Model, DataTypes, Sequelize } = require('sequelize')

const PRODUCT_TABLE = 'products'

const productSchema = {

  id: {
    allowNul: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  image: {
    allowNul:false,
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING,
    allowNul: false
  },
  price: {
    allowNul: false,
    type:  DataTypes.DECIMAL(10, 2)
  },
  description: {
    type: DataTypes.TEXT,
    allowNul:false,
    defaultValue: Sequelize.NOW
  },
}

class Products extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
    sequelize,
    tableName: PRODUCT_TABLE,
    modelName: 'Products',
    timestamps: false
    }
  }
}


module.exports = { PRODUCT_TABLE, productSchema, Products }



// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  as: 'Category of the product'
});

// Categories have many Products
//is this the right foreign key? we want to relate category and product
Category.hasMany(Product,'categoryID')

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {model: ProductTag, onDelete: 'CASCADE'}, 
  as: "All products"
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {model: ProductTag, onDelete: 'CASCADE'}, 
  as: "All of the tags for products"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

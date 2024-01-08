const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const categoryData = await category.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'category_products' }]
    });
  //are we using the correct models?
    if (!categoryData) {
      return res.status(404).json({ message: 'No category found for this product' });
    }
  
    return res.status(200).json(categoryData);
  } catch (err) {
    return res.status(500).json(err);
  }
  });

module.exports = router;

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy ({
      where : {
        id: req.params.id
      }
    });
    if (!categoryData) {
      return res.status(404).json({ message: 'No category found for this product' });
    }
  
    return res.status(200).json(categoryData);
  } catch (err) {
    return res.status(500).json(err);
  }
  });

  
module.exports = router;
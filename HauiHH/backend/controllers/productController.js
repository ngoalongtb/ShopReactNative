var productModel = require('../models/productModel.js');

/**
 * productController.js
 *
 * @description :: Server-side logic for managing products.
 */
module.exports = {

    /**
     * productController.list()
     */
    list: function (req, res) {
        productModel.find(function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product.',
                    error: err
                });
            }
            return res.json(products);
        });
    },

    /**
     * productController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        productModel.findOne({_id: id}, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product.',
                    error: err
                });
            }
            if (!product) {
                return res.status(404).json({
                    message: 'No such product'
                });
            }
            return res.json({
                status:'success',
                product
            });
        });
    },

    /**
     * productController.getByProductName()
     */
    getByProductName: function (req, res) {
        var name = req.params.name;
        productModel.find({name:new RegExp(name, "i")} ,function (err, products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product.',
                    error: err
                });
            }
            return res.json({
                status:'success',
                products
            });
        });
    },


    /**
     * productController.getByCategoryId()
     */
    getByCategoryId: function (req, res) {
        var id = req.params.id;

        productModel.find({category_id: id})
        .populate('category_id')
        .exec(function (err, products) {
            if (err) {
                return res.status(500).json({
                    status:'error',
                    message: 'Error when getting product.',
                    error: err
                });
            }
            return res.json({
                status:'success',
                products
            });
        });
    },

    /**
     * productController.create()
     */
    create: function (req, res) {
        var product = new productModel({
			category_id : req.body.category_id,
			name : req.body.name,
			price : req.body.price,
			description : req.body.description,
			image : req.body.image

        });

        product.save(function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating product',
                    error: err
                });
            }
            return res.status(201).json(product);
        });
    },

    /**
     * productController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        productModel.findOne({_id: id}, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting product',
                    error: err
                });
            }
            if (!product) {
                return res.status(404).json({
                    message: 'No such product'
                });
            }

            product.category_id = req.body.category_id ? req.body.category_id : product.category_id;
			product.name = req.body.name ? req.body.name : product.name;
			product.price = req.body.price ? req.body.price : product.price;
			product.description = req.body.description ? req.body.description : product.description;
			product.image = req.body.image ? req.body.image : product.image;
			
            product.save(function (err, product) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating product.',
                        error: err
                    });
                }

                return res.json(product);
            });
        });
    },

    /**
     * productController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        productModel.findByIdAndRemove(id, function (err, product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the product.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};

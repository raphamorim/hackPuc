/*
 * Routes index.
 */

// exports.products = require('../routes/products');

exports.index = function(req, res){
	res.render('index', {
        title: 'Colinha',
        description: ''
    });
};

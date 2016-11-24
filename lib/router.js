Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	//Home Route
	this.route('home',{
		path: '/',
		template: 'home',
		data: function(){
			templateData = {
				products:Products.find({is_featured:"1"})
			};
			return templateData;
		}
	});

	//Products
	this.route('products',{
		path: '/products',
		template: 'products',
		data: function(){
			templateData = {
				products:Products.find()
			};
			return templateData;
		}
	});

	//add product
	this.route('add_product',{
		path: '/add_product',
		template: 'add_product',
		data: function(){
			templateData = {
				categories:Categories.find()
			};
			return templateData;
		}
	});

	//category Products
	this.route('category_products',{
		path: '/categories/:slug',
		template: 'category_products',
		data: function(){
			templateData = {
				category_products:Products.find({
					category: this.params.slug
				})
			};
			return templateData;
		}
	});

	//New Review
	this.route('new_review',{
		path: '/new_review/:_id',
		template: 'new_review',
		data: function(){
			return Products.findOne(this.params._id);
		}
	});

	//Product Page
	this.route('product',{
		path: '/products/:_id',
		template: 'product',
		data: function(){
			return Products.findOne(this.params._id);
		}
	});

});
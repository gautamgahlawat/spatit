//Events

Template.new_review.events({
	"submit.new_review" : function(event){

		event.preventDefault();
		
		var rating = event.target.rating.value;
		var body = event.target.body.value;

		Meteor.call('addReview',this._id, rating, body);

		FlashMessages.sendSuccess('Review Added');
		Router.go('/');

		return false;
	}

});
import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		linkClicked: function(offer) {
			this.transitionToRoute('stores.offers', offer.get('type'), offer.id);
		}
	}
});
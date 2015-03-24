import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		linkClicked: function(offer) {
			this.sendAction('action',offer);
		}
	}
});

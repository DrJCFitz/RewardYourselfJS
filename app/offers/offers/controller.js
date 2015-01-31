import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        followLink: function(link) {
            console.log(link);
            window.open(link);
        }
    }
});

import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        var thisModel = this;
        return new Ember.RSVP.Promise(function(resolve){
            setTimeout(resolve,1000);
        }).then(function() {
            return thisModel.store.find('store');
        });
    }
});

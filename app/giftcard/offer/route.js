import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var thisModel = this;
        return new Ember.RSVP.Promise(function(resolve){
            setTimeout(resolve,3000);
        }).then(function() {return thisModel.store.find('store',
                               {'enabled':true,
                                'type':'giftcard',
                               'key':params.key});});
    }
});
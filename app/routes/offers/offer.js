import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) { 
        return this.store.find('store',
                               {'enabled':true,
                                'type':'online',
                               'key':params.key}); 
    }
});
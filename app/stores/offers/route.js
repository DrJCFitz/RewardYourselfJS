import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
       return this.store.find('store', {type: params.type, key: params.key, enabled:true });
    }
});

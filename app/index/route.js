import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
    	online: this.store.find('store',{top:true, type:'online'}),
    	giftcard: this.store.find('store', {top:true, type:'giftcard'})
    });
  }
});

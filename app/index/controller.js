import Ember from 'ember';

export default Ember.ArrayController.extend({
    filterVal: null,
    filterList: function(){
        var filter = this.get('filterVal');
        if (!filter) { return this; }

        return this.filter(function(item) {
          return item.name.indexOf(filter) !== -1;
        });
        
    }.property('filterVal')
});
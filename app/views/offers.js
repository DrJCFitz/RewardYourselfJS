import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'offers',
    tagName: 'div',
    classNames: ['offerList'],
    didInsertElement: function(){
        this._super();
        this.$('#offerTable')
            .DataTable({"paging":false,
                       "info":false,
                       "filter":false});
    }
});

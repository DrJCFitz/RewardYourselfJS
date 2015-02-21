import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'offers/offers',
    tagName: 'div',
    classNames: ['col-xs-12 col-md-6'],
    didInsertElement: function(){
        this._super();
        this.$('#offerTable')
            .DataTable({"paging":false,
                       "info":false,
                       "filter":false,
                       "order":[[2,"desc"]]});                       
    }
});

import Ember from 'ember';
import $ from 'jquery';

export default Ember.View.extend({
    didInsertElement: function(){
        this._super();
        $('.top-table')
            .DataTable({"paging":true,
            			"lengthMenu": [[5, 10, -1], [5, 10, "All"]],
            			"displayLength": 5,
                       "info":false,
                       "filter":false,
                       "order":[[1,"desc"],[0,"asc"]]});                       
    }
});

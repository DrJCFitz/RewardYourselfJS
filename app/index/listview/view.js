import Ember from 'ember';

export default Ember.ListView.extend({
    height: 300,
    width: 200,
    elementWidth: 200,
    rowHeight: 20,
    itemViewClass: Ember.ListItemView.extend({
        templateName: "index/row"
    })
});
import Ember from 'ember';

export default Ember.ListView.extend({
  height: 500,
  rowHeight: 30,
  itemViewClass: Ember.ListItemView.extend({
    templateName: "stores/online"
  })
});

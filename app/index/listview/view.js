import Ember from 'ember';
import $ from 'jquery';

export default Ember.ListView.extend({
    classNames: ['list-group'],
    height: 420,
    //width: 200,
    //elementWidth: 200,
    rowHeight: 42,
    itemViewClass: Ember.ListItemView.extend({
        template: Ember.Handlebars.compile('{{singleName}}'),
        tagName: 'a',
        classNames: ['list-group-item'],
        click: function(){
          // the id returned from a stores quirey includes the key as id
          var key = this.get('context.id');
          // clear the active class from the currently-enabled list-view items
          $('a.ember-list-item-view.active').removeClass('active');
          // add the active class to the current item
          this.$().addClass('active');
          // transition to the online offer route with the appropriate key value
          this.get('controller').transitionTo('online.offer', key);
        }
    })
});
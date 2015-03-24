import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    classNames: ['offerInstance'],
    click: function() {
    	this.sendAction('action',this.get('offer'));
    }
});

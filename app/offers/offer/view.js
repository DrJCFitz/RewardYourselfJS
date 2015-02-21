import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'offers/offer',
    tagName: 'tr',
    classNames: ['offer-instance'],
    click: function() {
        window.open(this.get('content').get('link'));
    }
});
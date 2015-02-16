import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'offers/top/offer',
    tagName: 'tr',
    classNames: ['offerInstance'],
    click: function() {
        window.open(this.get('content').get('link'));
    }
});
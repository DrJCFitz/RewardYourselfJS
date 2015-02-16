import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'stores',
    tagName: 'form',
    attributeBindings: ['role'],
    role: "form",
    classNames: ['storeList']
});

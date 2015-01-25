import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'stores',
    tagName: 'form',
    attributeBindings: ['role'],
    role: "form",
    classNames: ['storeList'],
    didInsertElement: function(){
        this._super();
        this.$('#searchStoresList')
            .btsListFilter('#searchStoresInput', 
                           {itemChild: 'span'});
    }
});

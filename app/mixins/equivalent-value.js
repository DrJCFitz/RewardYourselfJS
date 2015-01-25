import Ember from 'ember';

export default Ember.Mixin.create({
    equivalentRewardValue: Ember.computed('value','equivalentPercentage', function() {
            return (this.get('equivalentPercentage')*this.get('value'))+'%';
        }
    )
});

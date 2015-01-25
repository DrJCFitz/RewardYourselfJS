import Ember from 'ember';

export default Ember.Mixin.create({
    equivalentRewardValue: Ember.computed('value','equivalentPercentage', function() {
            return (this.get('equivalentPercentage')*this.get('value'))+'%';
        }
    ),
    rewardValueAndRate: Ember.computed('value','unit','rate','limit', function(){
      if (this.get('limit') !== undefined) {
          return this.get('limit')+' '+this.get('value')+' '+this.get('unit');
      } else if (this.get('rate') === '%') {
          return this.get('value')+this.get('rate');
      } else  {
          return this.get('value')+' '+this.get('unit')+this.get('rate');
      }
    }),
});

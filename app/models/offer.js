import DS from 'ember-data';

export default DS.Model.extend({
  portalName: DS.attr('string'),
  link: DS.attr('string')
});

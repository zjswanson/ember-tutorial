import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      rental:this.store.findAll('rental'),
      announcement: this.store.findAll('announcement')
    }
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    saveAnnouncement3(params){
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    }
  }
});

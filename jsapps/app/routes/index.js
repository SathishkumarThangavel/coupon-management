import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    if (this.routeName == 'index') {
      this.transitionTo('coupon');
    }
  }
});

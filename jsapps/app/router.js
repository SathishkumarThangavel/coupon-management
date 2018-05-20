import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('coupon');
  this.route('coupon/new', {
      path: '/new',
      resetNamespace: true
    });
  });

export default Router;

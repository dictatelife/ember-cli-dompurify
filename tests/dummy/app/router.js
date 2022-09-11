import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';
import { service } from '@ember/service';

export default class Router extends EmberRouter {
  @service domPurify;
  location = config.locationType;
  rootURL = config.rootURL;

  constructor() {
    super(...arguments);
  }
}

Router.map(function () {});

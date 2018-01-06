import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import challengeComponent from './challenge.component';

const challengeModule = angular.module('challenge', [
  uiRouter,
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('challenge', {
        url: '/challenge',
        component: 'challenge',
      });
  })

  .component('challenge', challengeComponent)

  .name;

export default challengeModule;

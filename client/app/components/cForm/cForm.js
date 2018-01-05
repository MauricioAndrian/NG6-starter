import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngMessages from 'angular-messages';
import cFormComponent from './cForm.component';

const cFormModule = angular.module('cForm', [
  uiRouter,
  ngMessages
])

  .component('cForm', cFormComponent)

  .name;

export default cFormModule;

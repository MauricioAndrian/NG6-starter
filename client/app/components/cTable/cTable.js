import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import cTableComponent from './cTable.component';

const cTableModule = angular.module('cTable', [
  uiRouter,
])

  .component('cTable', cTableComponent)

  .name;

export default cTableModule;

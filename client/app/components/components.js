import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Challenge from './challenge/challenge';
import CForm from './cForm/cForm';
import CTable from './cTable/cTable';

const componentModule = angular.module('app.components', [
  Home,
  About,
  Challenge,
  CForm,
  CTable
])

  .name;

export default componentModule;

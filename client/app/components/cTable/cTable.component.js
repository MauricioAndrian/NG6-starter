import template from './cTable.html';
import controller from './cTable.controller';
import './cTable.scss';

const cTableComponent = {
  restrict: 'E',
  bindings: {
    clients: '<'
  },
  template,
  controller,
};

export default cTableComponent;

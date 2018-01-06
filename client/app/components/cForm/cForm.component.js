import template from './cForm.html';
import controller from './cForm.controller';
import './cForm.scss';

const cFormComponent = {
  restrict: 'E',
  bindings: {
    newClientHandler: '&'
  },
  template,
  controller,
};

export default cFormComponent;

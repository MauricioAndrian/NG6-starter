import CFormModule from './cForm';
import CFormController from './cForm.controller';
import CFormComponent from './cForm.component';
import CFormTemplate from './cForm.html';

describe('CForm', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(CFormModule));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new CFormController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();

      expect(controller.name).toBeDefined();
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CFormTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = CFormComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(CFormTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(CFormController);
    });
  });
});

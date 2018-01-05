import CTableModule from './cTable';
import CTableController from './cTable.controller';
import CTableComponent from './cTable.component';
import CTableTemplate from './cTable.html';

describe('CTable', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(CTableModule));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new CTableController();
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
      expect(CTableTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = CTableComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(CTableTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(CTableController);
    });
  });
});

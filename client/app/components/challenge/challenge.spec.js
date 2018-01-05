import ChallengeModule from './challenge';
import ChallengeController from './challenge.controller';
import ChallengeComponent from './challenge.component';
import ChallengeTemplate from './challenge.html';

describe('Challenge', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ChallengeModule));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new ChallengeController();
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
      expect(ChallengeTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ChallengeComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(ChallengeTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(ChallengeController);
    });
  });
});

class CFormController {
  constructor($scope) {
    'ngInject';

    this.name = 'cForm';
    this.client = {
      name: '',
      age: '',
      email: ''
    };
    this.defaultForm = Object.assign({}, this.client);
    this.$scope = $scope;
  }

  saveNewClient() {
    if (!this.$scope.cForm.$valid) return;

    this.newClientHandler({ client: Object.assign({}, this.client) });

    this.client = Object.assign(this.client, this.defaultForm);
  }
}

export default CFormController;

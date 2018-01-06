class ChallengeController {
  constructor() {
    this.clients = [
      { id: 0, name: 'Mauricio Andrian', age: '26', email: 'andrian.mauricio@gmail.com' },
      { id: 1, name: 'Matías Villanueva', age: '28', email: 'matiasvillanuevar@gmail.com' },
      { id: 2, name: 'Raava Villanueva', age: '2', email: 'raavaloca@gmail.com' }
    ];
    this.lastId = 2;
  }

  newClientHandler(client) {
    client.id = this.lastId + 1;

    this.clients.push(client);

    this.lastId++;
  }

  getClients() {
    return this.clients.slice();
  }

  deleteClient(id) {
    if (id < 0) return;

    let indexOfClient = this.clients.findIndex(client => client.id === id);

    this.clients.splice(indexOfClient, 1);
  }
}

export default ChallengeController;

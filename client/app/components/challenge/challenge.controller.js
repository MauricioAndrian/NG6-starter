class ChallengeController {
  constructor() {
    this.clients = [
      { id: 0, name: 'Mauricio Andrian', age: '26', email: 'andrian.mauricio@gmail.com' },
      { id: 1, name: 'Jhon Smith', age: '28', email: 'jhonsmith@gmail.com' },
      { id: 2, name: 'Roger Moore', age: '35', email: 'rogermoore@gmail.com' },
      { id: 3, name: 'Donald Trump', age: '152', email: 'donaldthetrumpet@gmail.com' }
    ];
    this.lastId = 3;
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

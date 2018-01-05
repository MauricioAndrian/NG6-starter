class ChallengeController {
  constructor() {
    this.name = 'challenge';
    this.clients = [];
  }

  newClientHandler(client) {
    this.clients.push(client);
  }

  getClients() {
    return this.clients.slice();
  }
}

export default ChallengeController;

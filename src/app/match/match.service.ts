import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class matchService {
  private matchPlayers: string[] = [];

  getMatchPlayers() {
    return this.matchPlayers;
  }

  addPlayer(id: string) {
    this.matchPlayers.push(id);
  }

  removePlayer(id: string) {
    this.matchPlayers = this.matchPlayers.filter((playerId) => playerId !== id);
  }

  isPlayerPresent (id: string) {
    return this.matchPlayers.includes(id)
  }
}

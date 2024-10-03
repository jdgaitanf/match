import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class matchService {
  private matchPlayers: string[] = [];

  getAllplayers() {
    return this.matchPlayers;
  }

  addPlayer(id: string) {
    this.matchPlayers.push(id);
  }

  removePlayer(id: string) {
    this.matchPlayers = this.matchPlayers.filter(
      (id) => id !== id
    );
  }

  isPlayerPresent (id: string) {
    return this.matchPlayers.includes(id)
  }
}

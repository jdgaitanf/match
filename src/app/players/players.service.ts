import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class playersService {
  private players = [
    {
      id: 'p001',
      preferredName: 'Juancho',
    },
    {
      id: 'p002',
      preferredName: 'Mancho',
    },
    {
      id: 'p003',
      preferredName: 'David',
    },
    {
      id: 'p004',
      preferredName: 'Cocacolo',
    },
    {
      id: 'p005',
      preferredName: 'Ariel',
    },
    {
      id: 'p006',
      preferredName: 'Risas',
    },
    {
      id: 'p007',
      preferredName: 'Daniel',
    },
    {
      id: 'p008',
      preferredName: 'Jhon Empanadas',
    },
  ];

  getAllplayers() {
    return this.players;
  }

  addPlayer(preferredName: string) {
    this.players.push({ id: Date.now().toString(), preferredName });
  }

  getPlayer(playerId: string) {
    return (
      this.players.find((player) => player.id === playerId)?.preferredName
    );
  }

  removePlayer(playerId: string) {
    this.players = this.players.filter((player) => player.id !== playerId)
  }
}

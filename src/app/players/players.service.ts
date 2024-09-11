import { Injectable } from "@angular/core";

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
}

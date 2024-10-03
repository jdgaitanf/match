import { Component, EventEmitter, Output } from '@angular/core';
import { playersService } from './players.service';
import { NewPlayerComponent } from "./new-player/new-player.component";

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [NewPlayerComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class playersComponent {
  isAddingPlayer = false;

  constructor(private playersService: playersService) {}

  get players() {
    return this.playersService.getAllplayers();
  }

  onAddPlayer() {
    this.isAddingPlayer = true;
  }

  onCloseAddPlayer() {
    this.isAddingPlayer = false;
  }

  onRemovePlayer(playerId: string) {
    this.playersService.removePlayer(playerId);
  }
}

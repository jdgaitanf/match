import { Component, EventEmitter, inject, Output } from '@angular/core';
import { playersService } from './players.service';
import { matchService } from '../match/match.service';
import { NewPlayerComponent } from './new-player/new-player.component';

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

  private matchService = inject(matchService);

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

  onChangeStatus(playerId: string) {
    if (this.matchService.isPlayerPresent(playerId)) {
      this.matchService.removePlayer(playerId)
    }else{
      this.matchService.addPlayer(playerId)
    }
  }

  isPlayerSelected(playerId: string){
    return this.matchService.isPlayerPresent(playerId);
  }

}

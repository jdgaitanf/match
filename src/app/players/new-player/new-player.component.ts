import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { playersService } from '../players.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-player',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-player.component.html',
  styleUrl: './new-player.component.css',
})
export class NewPlayerComponent {
  @Output() close = new EventEmitter<void>();
  private playersService = inject(playersService);
  //  constructor() {
  //   console.log(this.playerId)
  //   console.log(this.playersService.getPlayer(this.playerId));
  //  }
  enteredPreferredName = '';

  onClose() {
    // console.log(this.playerId);
    this.close.emit();
  }
  onSubmit() {
    this.playersService.addPlayer(this.enteredPreferredName);
    this.close.emit();
  }

}

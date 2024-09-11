import { Component, inject } from '@angular/core';
import { playersService } from '../players.service';

@Component({
  selector: 'app-new-player',
  standalone: true,
  imports: [],
  templateUrl: './new-player.component.html',
  styleUrl: './new-player.component.css',
})
export class NewPlayerComponent {
  enteredPreferredName = '';

  private playersService = inject(playersService)

  onSubmit() {}
}

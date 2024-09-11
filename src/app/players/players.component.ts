import { Component } from '@angular/core';
import { playersService } from './players.service';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css',
})
export class playersComponent {
  constructor(private playersService: playersService) {
  }

  get players(){
    return this.playersService.getAllplayers();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { playersComponent } from "./players/players.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, playersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'match';
}

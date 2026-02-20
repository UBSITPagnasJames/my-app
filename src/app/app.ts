import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInteraction } from './Component/user-interaction/user-interaction';
import { HomeComponent } from './Component/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserInteraction,HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html', 
  styleUrls: ['./home.css'] 
})
export class HomeComponent {
  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'https://w7.pngwing.com/pngs/259/730/png-transparent-lebron-james-lebron-james-funny-face-cleveland-cavaliers-youtube-lebron-james-game-face-head-thumbnail.png';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();
}

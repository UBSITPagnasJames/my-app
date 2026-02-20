import { Component } from '@angular/core';

@Component({
  selector: 'app-user-interaction',
  imports: [],
  templateUrl: './user-interaction.html',
  styleUrl: './user-interaction.css',
})
export class UserInteraction {
  message: string = 'Click the button!';
  clickCount: number = 0;

  onButtonClick(): void {
    this.clickCount++;
    this.message = `Button clicked ${this.clickCount} times!`;
  }

  onMouseEnter(): void {
    console.log('Mouse entered the div!');
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Input changed:', target.value);

  }
}

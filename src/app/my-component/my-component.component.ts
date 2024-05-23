import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [FormsModule],
  template: `<div [innerHTML]="userInput"></div>`,
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent {
   title:string = '';
   userInput:string = '';
}

import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPhrase = lorem.sentence();
  userInput = '';
  success = false;

  onInputText(e: Event) {
    const target = e.target as HTMLInputElement;
    this.userInput = target.value;
    this.success = this.userInput === this.currentPhrase;
  }
}

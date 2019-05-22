import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  template: `
    <input [(ngModel)]="inputValue"/>
    <h2>{{inputValue | movieTitle}}</h2>
  `
})
export class MoviesComponent {
  inputValue;
}

import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-favorite',
  template: `
    <i (click)="onClick()" class="fa-star" [ngClass]="isFavorite ? 'far' : 'fas'"></i>
  `,
})
export class FavoriteComponent {
  @Input("isFavorite")  isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}

import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'app-favorite',
  template: `
    <i (click)="onClick()" class="fa-star" [ngClass]="isFavorite ? 'far' : 'fas'"></i>
  `
})
export class FavoriteComponent {
  @Input("isFavorite")  isFavorite: boolean;
  @Output("click") click = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({ newValue: this.isFavorite });
  }
}

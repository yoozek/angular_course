import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  template: `
    <div>
      <i class="fa-heart like" (click)="onLikeClick()" [ngClass]="isLiked ? 'fas' : 'far'"></i>
      <span class="pl-1">{{likesCount}}</span>
    </div>
  `,
  styles: [
    `
      .fa-heart {
        cursor: pointer;
      }

      .fas.fa-heart {
        color: deeppink;
      }
    `
  ]
})
export class LikeComponent {
  @Input("likesCount") likesCount: number;
  @Input("isLiked") isLiked: boolean;

  onLikeClick() {
    this.likesCount += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;
  }
}

import {Component, Input} from '@angular/core';
import {FavoriteChangedEventArgs} from "./favorite/favorite.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs.newValue);
  }

  tweet = {
    body: 'Here is the body pf a tweet...',
    isLiked: false,
    likesCount: 10
  }


}

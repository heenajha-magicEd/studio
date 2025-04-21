import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FavoriteImage } from '@models/dataTypes.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ImageCardComponent } from 'src/app/components/image-card/image-card.component';
import { selectAllFavorites } from 'src/app/store/favorites/favorites.selector';

@Component({
  selector: 'app-favorites-page',
  imports: [ImageCardComponent, CommonModule],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss',
})
export class FavoritesPageComponent {
  favorites$: Observable<FavoriteImage[]>;

  constructor(private store: Store) {
    this.favorites$ = this.store.select(selectAllFavorites);
  }
}

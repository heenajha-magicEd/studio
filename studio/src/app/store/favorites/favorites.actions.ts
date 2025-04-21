import { FavoriteImage } from '@models/dataTypes.model';
import { createAction, props } from '@ngrx/store';

export const addToFavorites = createAction(
  '[Favorites] Add Image',
  props<{ image: FavoriteImage }>()
);

export const removeFromFavorites = createAction(
  '[Favorites] Remove Image',
  props<{ id: string }>()
);

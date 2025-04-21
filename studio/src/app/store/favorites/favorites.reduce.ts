import { createReducer, on } from '@ngrx/store';
import { addToFavorites, removeFromFavorites } from './favorites.actions';
import { FavoriteImage } from '@models/dataTypes.model';

export const initialState: FavoriteImage[] = [];

export const favoritesReducer = createReducer(
  initialState,
  on(addToFavorites, (state, { image }) => {
    if (state.find((img) => img.id === image.id)) return state; // Avoid duplicates
    return [...state, image];
  }),
  on(removeFromFavorites, (state, { id }) =>
    state.filter((image) => image.id !== id)
  )
);

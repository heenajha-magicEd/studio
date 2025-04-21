import { FavoriteImage } from '@models/dataTypes.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFavoritesState =
  createFeatureSelector<FavoriteImage[]>('favorites');

export const selectAllFavorites = createSelector(
  selectFavoritesState,
  (favorites) => favorites
);

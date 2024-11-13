// core/shared-store/selectors/loading.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingState } from './shared.reducers';

export const selectLoadingState = createFeatureSelector<LoadingState>('loading');

export const selectLoading = createSelector(
  selectLoadingState,
  (state: LoadingState) => state.loading
);

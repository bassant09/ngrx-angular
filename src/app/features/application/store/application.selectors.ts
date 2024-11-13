import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationState } from './application.reducer';

export const selectApplicationState = createFeatureSelector<ApplicationState>('applications');

export const selectApplications = createSelector(
  selectApplicationState,
  (state) => state.applications
);

export const selectLoading = createSelector(
  selectApplicationState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectApplicationState,
  (state) => state.error
);

// application.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ApplicationActions from './application.actions';

export interface ApplicationState {
  applications: any[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: ApplicationState = {
  applications: null,
  loading: false,
  error: null,
};

export const applicationReducer = createReducer(
  initialState,
  on(ApplicationActions.loadApplications, (state) => ({
    ...state,
    error: null,
  })),
  on(ApplicationActions.loadApplicationsSuccess, (state, { applications }) => ({
    ...state,
    applications,
    error:null
  })),
  on(ApplicationActions.loadApplicationsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

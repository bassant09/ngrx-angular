// core/shared-store/reducers/loading.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as LoadingActions from './shared.actions';

export interface LoadingState {
  loading: boolean;
}

export const initialState: LoadingState = {
  loading: false,
};

export const loadingReducer = createReducer(

  initialState,
  on(LoadingActions.setLoading, (state, { loading }) => ({ ...state, loading }))
);

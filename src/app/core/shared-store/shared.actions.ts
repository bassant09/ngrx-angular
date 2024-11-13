// core/shared-store/actions/loading.actions.ts
import { createAction, props } from '@ngrx/store';

export const setLoading = createAction(
  '[Global] Set Loading',
  props<{ loading: boolean }>()
);

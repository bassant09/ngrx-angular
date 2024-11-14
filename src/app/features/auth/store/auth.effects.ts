// auth/store/auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Store } from '@ngrx/store';
import * as LoadingActions from '../../../core/shared-store/shared.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store:Store
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
    
      ofType(AuthActions.login),
      tap(()=>{
        this.store.dispatch(LoadingActions.setLoading({ loading: true }));

      }),
      switchMap(({ email, password }) =>
          
        this.authService.userLogin(email, password,44480).pipe(
            tap(() => {
                this.store.dispatch(LoadingActions.setLoading({ loading: false }));
              }),
              map((response: any) => {
                console.log(response);
                
                this.authService.saveToken( response.data.userLogin.access_token); 
                return AuthActions.loginSuccess({
                  user: response.user,
                  token:  response.data.userLogin.access_token
                });
              }),
          catchError((error) =>
            of(AuthActions.loginFailure({ error: error.message }))
          )
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        map(() => {
          localStorage.removeItem('authToken');
        })
      ),
    { dispatch: false }
  );
}

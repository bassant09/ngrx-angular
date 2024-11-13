// core/shared-store/effects/global.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import * as LoadingActions from './shared.actions';
import { log } from 'console';

@Injectable()
export class GlobalEffects {
  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}

  showLoadingMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoadingActions.setLoading),
        tap(({ loading }) => {
          this.messageService.clear();
          
          if (!loading) {
            this.messageService.clear();
            console.log('Applications loaded successfully!...');
  
                  this.messageService.add({
                      severity: 'success',
                      summary: 'Success',
                      detail: 'Applications loaded successfully!',
                     
                    });
                  //  this.messageService.clear();
  
           
             
           
          //  this.messageService.clear()
          } 
          else {
            
            console.log('loading...');
            
            this.messageService.add({
              severity: 'info',
              summary: 'Loading',
              detail: 'Loading applications...'
            });

          }
        })
      ),
    { dispatch: false }
  );
}

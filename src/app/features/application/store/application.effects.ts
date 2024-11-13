// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import * as ApplicationActions from './application.actions';
// import { catchError, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { ApplicationsService } from '../services/applications.service';
// import { MessageService } from 'primeng/api';
// import {  Store } from '@ngrx/store';
// import { selectLoading } from './application.selectors';

// @Injectable()
// export class ApplicationEffects {
//   constructor(
//     private actions$: Actions,
//     private applicationService: ApplicationsService,
//     private messageService: MessageService,
//     private store: Store 
//   ) {}

//   loadApplications$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ApplicationActions.loadApplications),
//       tap((action) => {
//         console.log('Loading state: ', action.loading); // logs the 'loading' state
//         if (action.loading) {
//           this.messageService.clear()
//           this.messageService.add({
//             severity: 'info',
//             summary: 'Loading',
//             detail: 'Loading applications...',
          
//           });
//         }
//       }),
//       mergeMap(() =>
//         this.applicationService.fetchApplications().pipe(
//           map((applications) =>
//             ApplicationActions.loadApplicationsSuccess({ applications })
//           ),
//           catchError((error) =>
//             of(ApplicationActions.loadApplicationsFailure({ error }))
//           )
//         )
//       )
//     )
//   );
  
//   // Success Effect
//   loadApplicationsSuccess$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(ApplicationActions.loadApplicationsSuccess),
//         tap((action) => {
         
//            this.messageService.clear();
//               this.messageService.add({
//               severity: 'success',
//               summary: 'Success',
//               detail: 'Applications loaded successfully!',
//               life:3000
//             });
         
            
          
         
//         })
//       ),
//     { dispatch: false }
//   );

//   // Failure Effect
//   loadApplicationsFailure$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(ApplicationActions.loadApplicationsFailure),
//         tap((action) => {
//           this.messageService.clear();
//           this.messageService.add({
//             severity: 'error',
//             summary: 'Error',
//             detail: `Failed to load applications: ${action.error}`,
//           });
//           console.error('Error loading applications: ', action.error);
//         })
//       ),
//     { dispatch: false }
//   );
// }
// application.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ApplicationActions from './application.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApplicationsService } from '../services/applications.service';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import * as LoadingActions from '../../../core/shared-store/shared.actions';

@Injectable()
export class ApplicationEffects {
  constructor(
    private actions$: Actions,
    private applicationService: ApplicationsService,
    private messageService: MessageService,
    private store: Store
  ) {}

  loadApplications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApplicationActions.loadApplications),
      tap(() => {
        // Set loading to true when starting the load
       this.store.dispatch(LoadingActions.setLoading({ loading: true }));
      }),
      mergeMap(() =>
        this.applicationService.fetchApplications().pipe(
          map((applications) => {
            // Set loading to false after success
            this.store.dispatch(LoadingActions.setLoading({ loading: false }));
            return ApplicationActions.loadApplicationsSuccess({ applications });
          }),
          catchError((error) => {
            // Set loading to false after failure
           this.store.dispatch(LoadingActions.setLoading({ loading: false }));
            return of(ApplicationActions.loadApplicationsFailure({ error }));
          })
        )
      )
    )
  );
}

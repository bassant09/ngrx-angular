import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ApplicationActions from './store/application.actions';
import * as ApplicationSelectors from './store/application.selectors';
import { MessageService } from 'primeng/api';

import * as LoadingActions from '../../core/shared-store/shared.actions';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})
export class ApplicationComponent  {
  applications$!: Observable<any[]|null>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  constructor(private store: Store,private messageService:MessageService) {
    this.applications$ = this.store.select(ApplicationSelectors.selectApplications)!;
    this.loading$ = this.store.select(ApplicationSelectors.selectLoading);
    this.error$ = this.store.select(ApplicationSelectors.selectError);
  }
  
  ngOnInit(): void {
 // this.store.dispatch(LoadingActions.setLoading({ loading: false }));

   this.store.dispatch(ApplicationActions.loadApplications());
  }
}

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
export class ApplicationComponent implements AfterViewInit {
  applications$!: Observable<any[]|null>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  constructor(private store: Store,private messageService:MessageService) {
    this.applications$ = this.store.select(ApplicationSelectors.selectApplications)!;
    this.loading$ = this.store.select(ApplicationSelectors.selectLoading);
    this.error$ = this.store.select(ApplicationSelectors.selectError);
  }
  ngAfterViewInit(): void {
  //  this.showToast(true)
 // this.messageService.clear()
  // setTimeout(() => {
  //   this.messageService.clear();

  //   this.store.dispatch(LoadingActions.setLoading({ loading: true }));

  //   this.store.dispatch(ApplicationActions.loadApplications({ loading: true }));

  // }, 0);
  }

  ngOnInit(): void {
  // this.store.dispatch(LoadingActions.setLoading({ loading: true }));

    this.store.dispatch(ApplicationActions.loadApplications());
   // this.store.dispatch(ApplicationActions.loadApplications({ loading: true }));

    // this.applications$.subscribe(applications => {
      
    //   console.log("Applications data:", applications);  
    // });
   // this.messageService.clear(); 
  }
  // showToast(flag:boolean){
  //   if(flag){
  //     this.messageService.clear();
  //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'key: toast1' });
  //   }
  //   else{
  //     this.messageService.clear();
  //     this.messageService.add({ severity: 'info', summary: 'Success', detail: 'key: toast1' });
  //   }


  // }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { StoreModule } from '@ngrx/store';
import { applicationReducer } from './store/application.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from './store/application.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    ApplicationComponent
  ],
  imports: [
    CommonModule, 
    ApplicationRoutingModule,
    //ToastModule,  
    StoreModule.forFeature('applications', applicationReducer),
    EffectsModule.forFeature([ApplicationEffects])
  ],
  providers:[
  //  MessageService
  ]
  
})
export class ApplicationModule { }

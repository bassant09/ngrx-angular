import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GlobalEffects } from './shared-store/global.effects';
import { loadingReducer } from './shared-store/shared.reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(loadingReducer),
    EffectsModule.forRoot([GlobalEffects]),
  ]
})
export class CoreModule { }

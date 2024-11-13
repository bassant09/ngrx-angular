import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphQlModule';
import { StoreModule } from '@ngrx/store';
import { applicationReducer } from './features/application/store/application.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from './features/application/store/application.effects';
import { FeaturesModule } from './features/features.module';
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule, 
    ApolloModule,  
    BrowserAnimationsModule, 
    ToastModule,
   // StoreModule.forRoot({}), 
   // EffectsModule.forRoot([])  ,
    CoreModule
  ],
  providers: [
    provideClientHydration(),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

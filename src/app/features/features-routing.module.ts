import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  { 
    path: '', 
    component: FeaturesComponent,  // This is the main component
    children: [
      { 
        path: 'applications', 
        loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // forChild since it’s for a feature module
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

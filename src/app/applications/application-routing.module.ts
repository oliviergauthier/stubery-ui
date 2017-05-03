import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationDetailComponent } from './components/detail/application-detail.component'
import { ApplicationListComponent } from './components/list/application-list.component'

const appRoutes: Routes = [
  // { path: 'application/:id', component: ApplicationDetailComponent  },
  { path: 'applications', component: ApplicationListComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
      RouterModule
  ]
})
export class ApplicationRoutingModule { }

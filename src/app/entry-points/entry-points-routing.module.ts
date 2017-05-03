import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntryPointsComponent } from './components/list/entry-points.component'

const appRoutes: Routes = [
  { path: 'application/:id', component: EntryPointsComponent  },
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
  ],
  exports: [
      RouterModule
  ]
})
export class EntryPointsRoutingModule { }

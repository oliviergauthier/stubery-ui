import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import { Ng2LetterAvatar } from "ng2letteravatar/ng2letteravatar";

import 'hammerjs';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationDialogComponent } from './application-dialog/application-dialog.component';
import { ApplicationEntryComponent } from './application-entry/application-entry.component';
import { ApplicationsService } from './services/applications/applications.service';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { 
    path: 'application/:id',
    component: ApplicationDetailComponent },
  {
    path: 'applications',
    component: ApplicationListComponent,
    data: { title: 'Applications' }
  },
  { 
    path: '',
    redirectTo: '/applications',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];


@NgModule({
  declarations: [
    Ng2LetterAvatar,
    AppComponent,
    DashboardComponent,
    ApplicationDialogComponent,
    ApplicationDialogComponent,
    ApplicationEntryComponent,
    ApplicationDetailComponent,
    ApplicationListComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
  ],
  providers: [ApplicationsService],
  entryComponents : [ApplicationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

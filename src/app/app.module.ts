import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

import { ApplicationModule } from './applications/application.module'
import { EntryPointsModule } from './entry-points/entry-points.module'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EntryPointsComponent } from './entry-points/components/list/entry-points.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    EntryPointsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    ApplicationModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import 'hammerjs';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationDialogComponent } from './application-dialog/application-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApplicationDialogComponent,
    ApplicationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
  ],
  providers: [],
  entryComponents : [ApplicationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

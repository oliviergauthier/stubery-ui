import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    Ng2LetterAvatar,
    AppComponent,
    DashboardComponent,
    ApplicationDialogComponent,
    ApplicationDialogComponent,
    ApplicationEntryComponent,
  ],
  imports: [
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

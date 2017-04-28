import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Ng2LetterAvatar } from "ng2letteravatar/ng2letteravatar";

import { ApplicationDialogComponent } from './components/creation-dialog/application-dialog.component';
import { ApplicationEntryComponent } from './components/entry/application-entry.component';
import { ApplicationDetailComponent } from './components/detail/application-detail.component';
import { ApplicationListComponent } from './components/list/application-list.component';

import { ApplicationsService } from './services/applications.service';

import { ApplicationRoutingModule } from './application-routing.module';

@NgModule({
  declarations: [
    Ng2LetterAvatar,    
    ApplicationDialogComponent,
    ApplicationEntryComponent,
    ApplicationDetailComponent,
    ApplicationListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    ApplicationRoutingModule,
  ],
  providers: [ApplicationsService],
  entryComponents: [ApplicationDialogComponent],
})
export class ApplicationModule { }

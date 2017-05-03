import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Ng2LetterAvatar } from "ng2letteravatar/ng2letteravatar";

import { EntryPointsComponent } from './components/list/entry-points.component';

import { EntryPointsRoutingModule } from './entry-points-routing.module';

@NgModule({
  declarations: [
    EntryPointsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    EntryPointsRoutingModule,
  ],
  providers: [],
  entryComponents: [],
})
export class EntryPointsModule { }

import { Component, OnInit, Optional } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import { Application } from './services/applications/application'
import { ApplicationsService } from './services/applications/applications.service'
import { ApplicationDialogComponent } from './application-dialog/application-dialog.component'
import { ApplicationEntryComponent } from './application-entry/application-entry.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  applications: Application[];

  constructor(private _applicationsService: ApplicationsService, private _dialog:MdDialog) {
    _applicationsService.applicationsChanged.subscribe(
      apps => { this.applications = apps }
    );
  }

  getApplications(): void {
    this._applicationsService.getApplications().then(apps => this.applications = apps);
  }

  ngOnInit(): void {
    this.getApplications();
  }

  onSelect(application:Application) : void {
    console.debug("Application selected " + application.name);
  }

  onCreate() : void {
    this._dialog.open(ApplicationDialogComponent);
  }

  title = 'app works!';
}



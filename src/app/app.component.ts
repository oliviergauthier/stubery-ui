import { Component, OnInit, Optional } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import { Application } from './services/applications/application'
import { ApplicationsService } from './services/applications/applications.service'
import { ApplicationDialogComponent } from './applications/creation-dialog/application-dialog.component'
import { ApplicationEntryComponent } from './applications/entry/application-entry.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  applications: Application[];

  constructor(private _applicationsService: ApplicationsService, private _dialog:MdDialog) {
    _applicationsService.applications$.subscribe(
      apps => {
        this.applications = apps
      }
    );
  }

  getApplications(): void {
    this._applicationsService.getApplications().then(applications => this.applications = applications);
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



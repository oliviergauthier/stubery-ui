import { Component, OnInit, Optional } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

import { Application } from '../services/applications/application'
import { ApplicationsService } from '../services/applications/applications.service'
import { ApplicationDialogComponent } from '../application-dialog/application-dialog.component'
import { ApplicationEntryComponent } from '../application-entry/application-entry.component'

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

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

}

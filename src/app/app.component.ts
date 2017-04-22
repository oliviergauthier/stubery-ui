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
  providers: [ApplicationsService]
})
export class AppComponent implements OnInit {

  applications: Application[];

  constructor(private _applicationsService: ApplicationsService, private _dialog:MdDialog) { }

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
    let dialogRef = this._dialog.open(ApplicationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.debug("Create application : " + result)
    })
    console.debug("Create application")
  }

  title = 'app works!';
}



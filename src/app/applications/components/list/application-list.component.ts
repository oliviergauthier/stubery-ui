import { Component, OnInit, Optional } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { Application } from '../../services/application'
import { ApplicationsService } from '../../services/applications.service'
import { ApplicationDialogComponent } from '../creation-dialog/application-dialog.component'
import { ApplicationEntryComponent } from '../entry/application-entry.component'

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

   applications: Application[];

  constructor(private _applicationsService: ApplicationsService, private _dialog:MdDialog, private _router:Router) {
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
    this._router.navigate(['/application'], application.id);
  }

  onCreate() : void {
    this._dialog.open(ApplicationDialogComponent);
  }

}

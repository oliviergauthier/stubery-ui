import { Component, OnInit } from '@angular/core';

import { Application } from './services/applications/application'
import { ApplicationsService } from './services/applications/applications.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApplicationsService]
})
export class AppComponent implements OnInit {

  applications: Application[];

  constructor(private _applicationsService: ApplicationsService) { }

  getApplications(): void {
    this._applicationsService.getApplications().then(applications => this.applications = applications);
  }

  ngOnInit(): void {
    this.getApplications();
  }

  title = 'app works!';
}

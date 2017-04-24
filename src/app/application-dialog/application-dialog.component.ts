import { Component, OnInit, Optional } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MaterialModule} from '@angular/material';
import {ApplicationsService} from '../services/applications/applications.service';

@Component({
  selector: 'application-dialog',
  templateUrl: './application-dialog.component.html',
  styleUrls: ['./application-dialog.component.css']
})
export class ApplicationDialogComponent {

  constructor(public dialog: MdDialog, 
              @Optional() public dialogRef: MdDialogRef<ApplicationDialogComponent>,
              private applicationService : ApplicationsService) { }

  appName : string;

  onCancel(result) : void {
    this.dialogRef.close()
  }

  onCreate(appName) : void {
    this.dialogRef.close()
    this.applicationService.createApplication(appName);
    console.debug('Application name : ' + appName)
  }

}

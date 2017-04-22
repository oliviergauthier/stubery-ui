import { Component, OnInit, Optional } from '@angular/core';
import {MdDialog, MdDialogRef, MdDialogConfig, MaterialModule} from '@angular/material';

@Component({
  selector: 'application-dialog',
  templateUrl: './application-dialog.component.html',
  styleUrls: ['./application-dialog.component.css']
})
export class ApplicationDialogComponent {

  constructor(public dialog: MdDialog, @Optional() public dialogRef: MdDialogRef<ApplicationDialogComponent>) { }

  onCancel(result) : void {
    this.dialogRef.close()
  }

  onCreate(result) : void {
    this.dialogRef.close()
  }

}

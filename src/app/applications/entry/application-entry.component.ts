import { Component, Input } from '@angular/core';
import { Application } from '../../services/applications/application'

@Component({
  selector: 'application-entry',
  templateUrl: './application-entry.component.html',
  styleUrls: ['./application-entry.component.css']
})
export class ApplicationEntryComponent {

  @Input() application : Application;

  constructor() { }

  get firstLetter() {
    return this.application.name.charAt(0);
  }

}

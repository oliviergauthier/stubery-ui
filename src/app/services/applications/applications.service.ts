import { Injectable } from '@angular/core';

import { Application} from './application';
import { APPLICATIONS } from './mock-applications';

@Injectable()
export class ApplicationsService {

  getApplications() : Promise<Application[]> {
    return Promise.resolve(APPLICATIONS);
  }

  constructor() { }

}

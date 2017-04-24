import { Injectable } from '@angular/core';

import { Application} from './application';
import { APPLICATIONS } from './mock-applications';

@Injectable()
export class ApplicationsService {

  public getApplications() : Promise<Application[]> {
    return Promise.resolve(APPLICATIONS);
  }

  public createApplication(name:string) : Application {
    let app : Application = { id: 1, name:name, color:"#a094e7", icon: null };
    return app;
  }

  constructor() { }

}

import { Injectable } from '@angular/core';

import { Subject }    from 'rxjs/Subject';
import { Application} from './application';
import { APPLICATIONS } from './mock-applications';

@Injectable()
export class ApplicationsService {

  private _currentApplications : Application[] = APPLICATIONS;
  private _applicationsSource = new Subject<Application[]>();

  applications$ = this._applicationsSource.asObservable();

  public getApplications() : Promise<Application[]> {
    return Promise.resolve(Array.from(this._currentApplications));
  }

  public createApplication(name:string) : Application {
    let app : Application = { id: 1, name:name, color:"#a094e7", icon: null };
    
    this._currentApplications.push(app);
    this._applicationsSource.next(Array.from(this._currentApplications));

    return app;
  }

  constructor() { }

}

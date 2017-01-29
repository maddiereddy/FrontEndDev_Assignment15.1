import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { APP_CONFIG, IAppConfig } from './app.config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {

    private baseUrl: string;  // URL to web api
    private companies: string; //https://api.myjson.com/bins/1ca6xt
    private universities: string; //https://api.myjson.com/bins/w7hlt
    private urlInfo: any;

    //Have stored urls for the rest api in the app.config file and injected it here in the service
    //So, if the end points change or the base url changes, we can just change it in the app.config
    //and the service or components do not need to be aware of it
    //we inject this interface AppConfig into the service constructor and Angular will provide it
    //for us based on our registration in the app.module ngModule

    constructor(private http: Http, @Inject(APP_CONFIG) private config: IAppConfig) {}

    getCompanies()  {
        return this.http.get(`${this.config.apiEndpoint}${this.config.companiesUrl}`)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getUniversities()  {
        return this.http.get(`${this.config.apiEndpoint}${this.config.universitiesUrl}`)
        .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body || [];
    }

    //error handling
    private handleError(error: any) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

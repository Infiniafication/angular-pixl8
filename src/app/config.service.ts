import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
  fullName: string;
  email: string;
  message: string;
  website: string;
  github: string;
  twitter: string;
  linkedin: string;
  testmode: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  // TODO: Refactor all hardcoded URLs
  configUrl: string = 'https://www.pixl8.co.uk/api/jobs/v1/application/';

  applyJob(config: Config) {
    return this.http.post<string>(this.configUrl, config, httpOptions);
  }

}
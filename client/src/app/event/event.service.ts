import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { EventObj } from './eventobj';
import { LoginService } from '../login/login.service';


@Injectable()
export class EventService {

  constructor(private http: Http,private loginServise:LoginService) { }
  event:EventObj;
 
  onEventAddServise(event: any) {
    this.loginServise.createAuthenticationHeader();
     return this.http.post('http://localhost:8080/api/newEvent', event,this.loginServise.options).map((response: Response) => response.json());
  }
}

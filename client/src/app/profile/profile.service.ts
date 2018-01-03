import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { LoginService } from '../login/login.service';

@Injectable()
export class ProfileService {

  constructor(private http: Http,private loginServise:LoginService) {



   }
   getProfileData(){


  this.loginServise.createAuthenticationHeader();
  console.log("loginServise Call in Profile servise");
  console.log(this.loginServise.options);
 
  return this.http.get('http://localhost:8080/api/profile',this.loginServise.options).map((response: Response) => response.json());;
}
}

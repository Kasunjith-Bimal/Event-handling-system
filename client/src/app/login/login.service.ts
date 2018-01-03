import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Login } from './login';
import { User } from '../register/user';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class LoginService {

  authToken: string;


  constructor(private http: Http) { }

  login: Login;

  user: User;

  options;

  getheaderData(){
    return this.options;
  }
  createAuthenticationHeader() {
    console.log("Create Authenticication Header");
    this.loadToken();

  }
  loadToken() {
    const Token = localStorage.getItem('token');
    this.authToken = Token;
    console.log("Auth Token");
    console.log(this.authToken);
    const headers =new Headers();
    headers.append("authorization",this.authToken); 
    headers.append("Content-Type", "application/json");
    this.options = new RequestOptions({ headers: headers });
    
  }
  onLoginServise(login: any) {

    return this.http.post('http://localhost:8080/api/login', login).map((response: Response) => response.json());
  }

  storeUserData(token, user) {

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

    console.log(this.user);
    console.log(this.authToken);

  }

  LogOut(){

    this.authToken =null;
    this.user =null;
    this.login =null;
    localStorage.clear();
  }
  
  loggedIn(){
    return tokenNotExpired();
  }
  
}

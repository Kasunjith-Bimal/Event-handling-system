import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers,Response } from '@angular/http';
import { Login } from './login';
import { User } from '../register/user';

@Injectable()
export class LoginService {

  authToken : string;
 

  constructor(private http:Http) { }

  login:Login;

  user:User;

  onLoginServise(login:any){

    return this.http.post('http://localhost:8080/api/login',login).map((response: Response) => response.json());
  }
  
  storeUserData(token,user){

    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;

    console.log(this.user);
    console.log(this.authToken);
  
  }

}

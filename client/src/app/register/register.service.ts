import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import { User } from './user';

@Injectable()
export class RegisterService {

  constructor(private http:Http) { }
  user : User ;
  OnRegisterServise(user:any){
   
    return this.http.post('http://localhost:8080/api/user',user);
}

}

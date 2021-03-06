import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';
import { Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  redirectUrl:any;
  
  constructor(private loginServise:LoginService,private router:Router){

  }
  canActivate(
  router:ActivatedRouteSnapshot,
  state:RouterStateSnapshot

  ) {
    if(this.loginServise.loggedIn()){
      return true;
    }else{
      this.redirectUrl = state.url;
      this.router.navigate['/login'];
      return false;
    }
  }
}

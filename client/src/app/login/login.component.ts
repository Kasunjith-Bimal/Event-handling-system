import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  previseUrl: any;
  messageText: any;
  messageTextStyle: string;

  login: Login = {
    username: "test",
    password: '*********',
  };

  constructor(private loginservise: LoginService, private router: Router, private authGard: AuthGuard) { }

  ngOnInit() {

    if (this.authGard.redirectUrl) {
      this.messageText = "You must be login to view that page";
      this.previseUrl = this.authGard.redirectUrl;
      this.authGard.redirectUrl = undefined;
    }
  }

  onSubmit() {
    console.log(this.login);
    this.loginservise.onLoginServise(this.login).subscribe(data => {

      if (!data.success) {
        this.messageTextStyle = "alert alert-denger";
        this.messageText = data.message;
      } else {
        this.messageTextStyle = "alert alert-success";
        console.log("sucess");
        console.log(data.user);
        this.loginservise.storeUserData(data.token, data.user)
        this.messageText = data.message;
        // this.router.navigate(['/login']);
        if (this.previseUrl) {
          this.router.navigate([this.previseUrl]);

        } else {
          this.router.navigate(['/profile']);
        }


      }
    });
  }
}

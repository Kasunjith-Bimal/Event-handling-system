import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RegisterService } from './register.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  messageText: string;
  messageTextStyle:string;
  user: User = {
    username: "test",
    email: "test@gmail.com",
    password: '*********',
    address: 'address',
    telephone: '0272222770',
    confirmPassword: '*********'
  }

  mathPassword: string = this.user.password;

  onSubmit() {
    console.log(this.user);
    this.registerService.OnRegisterServise(this.user).subscribe(data => {
      if (!data.success) {
        this.messageTextStyle = "alert alert-denger";
        this.messageText = data.message;
      } else {
        this.messageTextStyle = "alert alert-success";
        this.messageText = data.message;
        this.router.navigate(['/login']);
      }
    });
  }

  constructor(private registerService: RegisterService,private router:Router) {


  }

  ngOnInit() {

  }
}



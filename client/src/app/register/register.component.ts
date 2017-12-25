import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user :User  = {
    username :"test",
    email :"test@gmail.com",
    password:'*********',
    address :'address',
    telephone : '0272222770'
  }

  
  onSubmit(){
    console.log(this.user);
    this.registerService.OnRegisterServise(this.user).subscribe(data=>console.log(data) );
  }

  constructor(private registerService : RegisterService) { }

  ngOnInit() {
  }

}

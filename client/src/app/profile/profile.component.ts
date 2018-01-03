import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from '../register/user';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [LoginService,ProfileService]
  
})
export class ProfileComponent implements OnInit {

  constructor(private profileService:ProfileService,private loginService:LoginService) { }
  username:string;
  address:string;
  telephone:string;
  email:string;
  ngOnInit() {

    this.profileService.getProfileData().subscribe(profile=>{
      console.log("Profile");
      console.log(profile);
      this.username = profile.user.username; 
      this.address = profile.user.address;
      this.email = profile.user.email;
      this.telephone = profile.user.telephone;

    });
    
  }



}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers:[LoginService]
})
export class NavigationComponent implements OnInit {

  constructor(private loginServise:LoginService,private router:Router) { }

  ngOnInit() {
  }

  onLogOut(){
   this.loginServise.LogOut();
   this.router.navigate(['/login']);
  }
}

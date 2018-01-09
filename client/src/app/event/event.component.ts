import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  newEvent = false;
  loadingEvents = false;
  eventMessage :string ="Event";
  constructor(private router: Router) { }
  newEventForm() {
    this.newEvent = true;
    this.eventMessage ="Add Event";
    this.router.navigate(['/event/new']);
  }
  reloadEventForm() {
    this.loadingEvents = true;
    this.eventMessage ="All Event";
    setTimeout(()=>{
      this.loadingEvents = false;
      this.eventMessage ="All Event";
    }, 1000)
  }
  ngOnInit() {
  }

}

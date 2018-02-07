import { Component, OnInit, Input } from '@angular/core';
import { EventService } from './event.service';
import { EventObj } from './eventobj';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  constructor(private eventService: EventService,private router: Router) { }
  allEvents;
  searchtest;
  p: number = 1;
  @Input() eventDataId: number;
  @Input() MoreDetails :any;
 
  GetAllEventsData() {
   
    this.eventService.getAllEvents().subscribe(data=>{
    
      this.allEvents = data.events;
      console.log(data);

      console.log( this.allEvents);
    });

  }
  Listitem(id:any){
console.log(id);

this.router.navigate(['/event',id]);
  }
  
  ngOnInit() {
console.log(this.MoreDetails);
    this.GetAllEventsData();
    
  }

}

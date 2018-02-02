import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { EventObj } from './eventobj';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  constructor(private eventService: EventService) { }
  allEvents;
  searchtest;
  p: number = 1;
  
 
  GetAllEventsData() {
   
    this.eventService.getAllEvents().subscribe(data=>{
    
      this.allEvents = data.events;
      console.log(data);

      console.log( this.allEvents);
    });

  }

  
  ngOnInit() {

    this.GetAllEventsData();
    
  }

}

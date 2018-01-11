import { Component, OnInit } from '@angular/core';

import { EventService } from './event.service';
import { EventObj } from './eventobj';
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {


  constructor(private eventService: EventService) { }


  eventobj: EventObj = {

    eventName: "Event name",
    eventShortDescription: "Event Short Description",
    eventLongDescription: "Event Long Description",
    eventDate: "Date",
    eventtimehoures: 1,
    eventminite: 1,
    eventTime: "",
  }




  onSubmit() {
    const time1 = this.eventobj.eventtimehoures + "" + this.eventobj.eventminite;
    this.eventobj.eventTime = time1;
    console.log(this.eventobj);
    // console.log(this.sendeventObj);
    this.eventService.onEventAddServise(this.eventobj).subscribe(data => console.log(data));
  }


  ngOnInit() {



  }

}

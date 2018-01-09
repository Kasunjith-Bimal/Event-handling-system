import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  constructor() { }
  event  ={
   eventname :"Event name",
   eventshortdescription : "Event Short Description",
   eventlongdescription:"Event Long Description",
   eventdate:Date,
   eventtimehoures:1,
   eventminite:1
  }
  ngOnInit() {
    console.log(this.event)
  }

}

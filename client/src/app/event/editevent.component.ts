import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventService } from './event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventObj } from './eventobj';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit {

  constructor(private eventService: EventService,private router: Router,private route: ActivatedRoute) { }
  
  private subscription: Subscription;
  // eventdataobj :any;
  @Output() eventdataobj = new EventEmitter<any>();
  private eventid:number;

    eventobj: any = {
  
      eventName: "",
      eventShortDescription: "",
      eventLongDescription: "",
      eventDate:"",
      eventTime: "",
      eventCreatedBy:"",
    }
  
  
  
  
    onUpdateSubmit() {
      console.log(this.eventdataobj);
    }
  
  
    ngOnInit() {
  
      this.subscription = this.route.params.subscribe(
        (params: any) => {
  console.log(params);
          this.eventid = params['id'];
          console.log(this.eventid);
        this.eventService.getEventDetails(this.eventid).subscribe(data => {
  
          this.eventdataobj = data.events;
          console.log( this.eventdataobj);
        });
        
        });

        // this.eventobj.eventName = this.eventdataobj.events.eventName;
        // console.log(this.eventobj);
  
    }

}

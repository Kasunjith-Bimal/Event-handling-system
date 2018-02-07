import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventService } from './event.service';
import { EventObj } from './eventobj';

@Component({
  selector: 'app-moredetailevent',
  templateUrl: './moredetailevent.component.html',
  styleUrls: ['./moredetailevent.component.css']
})
export class MoredetaileventComponent implements OnInit {
  
private subscription: Subscription;
// eventdataobj :any;
private eventid:number;
@Output() eventdataobj = new EventEmitter<any>();
  constructor(private route: ActivatedRoute,private eventService:EventService,private router: Router) {

   
   }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {

        this.eventid = params['id'];
      this.eventService.getEventDetails(this.eventid).subscribe(data => {

        this.eventdataobj = data.events;
        console.log( this.eventdataobj);
      });
      
      });

  }
  editEvent(ids:any){
    console.log(ids);
    this.router.navigate(['/event/edit',ids]);
  }

}

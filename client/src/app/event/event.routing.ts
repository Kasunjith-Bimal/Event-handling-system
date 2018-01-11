import {Routes} from '@angular/router';
import { EventComponent } from './event.component';
import { AddeventComponent } from './addevent.component';
import { MoredetaileventComponent } from './moredetailevent.component';
import { EventlistComponent } from './eventlist.component';
import { AuthGuard } from '../guards/auth.guard';


export const EventRouting: Routes = [
  { path: '', component: EventlistComponent },
  { path: 'new', component: AddeventComponent },
  { path: 'more', component: MoredetaileventComponent }
];


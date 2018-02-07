import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { NavigationComponent } from './navigation/navigation.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RegisterService } from './register/register.service';
import { EqualValidatorDirective } from './register/equal-validator.directive';
import { LoginService } from './login/login.service';
import { ProfileService } from './profile/profile.service';
import {MatListModule} from '@angular/material/list';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { EventComponent } from './event/event.component';
import {MatCardModule} from '@angular/material/card';
import { AddeventComponent } from './event/addevent.component';
import { MoredetaileventComponent } from './event/moredetailevent.component';
import { EventlistComponent } from './event/eventlist.component';
import {MatSliderModule} from '@angular/material/slider';
import { ImageUploadModule } from "angular2-image-upload";
import { EventService } from './event/event.service';
import { SearchfilterPipe } from './event/searchfilter.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditeventComponent } from './event/editevent.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashbordComponent,
    EqualValidatorDirective,
    EventComponent,
    AddeventComponent,
    MoredetaileventComponent,
    EventlistComponent,
    SearchfilterPipe,
    EditeventComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatPaginatorModule,
    ImageUploadModule.forRoot(),
    NgxPaginationModule
    
    
  
  ],
  providers: [RegisterService,LoginService,ProfileService,EventService,AuthGuard,NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { NavigationComponent } from './navigation/navigation.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RegisterService } from './register/register.service';
import { EqualValidatorDirective } from './register/equal-validator.directive';
import { LoginService } from './login/login.service';
import { ProfileService } from './profile/profile.service';
import {MatListModule} from '@angular/material/list';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { EventComponent } from './event/event.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashbordComponent,
    EqualValidatorDirective,
    EventComponent
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
  
  ],
  providers: [RegisterService,LoginService,ProfileService,AuthGuard,NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

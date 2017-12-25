import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashbordComponent
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
  
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

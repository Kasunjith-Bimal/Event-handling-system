import { provideRoutes, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { EventComponent } from './event/event.component';
import { EventRouting } from './event/event.routing';


const APP_ROUTE_PROVIDER: Routes = [
    
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:LoginComponent,canActivate:[NotAuthGuard]},
    {path:'login',component:LoginComponent,canActivate:[NotAuthGuard]},
    {path:'register',component:RegisterComponent,canActivate:[NotAuthGuard]},
    {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
    {path:'dashbord',component:DashbordComponent,canActivate:[AuthGuard]},
    {path:'event',component:EventComponent,canActivate:[AuthGuard],children:EventRouting},
    ];
    
export const routing = RouterModule.forRoot(APP_ROUTE_PROVIDER);



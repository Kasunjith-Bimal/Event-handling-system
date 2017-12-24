import { provideRoutes, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DashbordComponent } from './dashbord/dashbord.component';


const APP_ROUTE_PROVIDER: Routes = [
    
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent},
    {path:'dashbord',component:DashbordComponent},
    ];
    
export const routing = RouterModule.forRoot(APP_ROUTE_PROVIDER);



import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    // http://localhost:4200 => home component will be displayed 
{ path:" ", component :HomeComponent },

// http://localhost:4200 => login will be displayed
{ path:"singin", component : LoginComponent},

// http://localhost:4200 => singup component will be displayed
{ path:"inscription", component : SingupComponent},

// http://localhost:4200 => admin Component will be displayed 
{ path:"admin", component: AdminComponent},
];

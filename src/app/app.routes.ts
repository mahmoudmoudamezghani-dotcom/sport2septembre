import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component.spec';

export const routes: Routes = [
    // http://localhost:4200 => home component will be displayed 
{ path:"", component :HomeComponent },

// http://localhost:4200 => login will be displayed
{ path:"singin", component : LoginComponent},

// http://localhost:4200 => singup component will be displayed
{ path:"inscription", component : SignupComponent },

// http://localhost:4200 => admin Component will be displayed 
{ path:"admin", component: AdminComponent},
];

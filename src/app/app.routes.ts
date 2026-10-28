import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component.spec';
import { AddMatcheComponent } from './components/add-matche/add-matche.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TeamsComponent } from './components/teams/teams.component';

export const routes: Routes = [
    // http://localhost:4200 => home component will be displayed 
{ path:"", component :HomeComponent },

// http://localhost:4200 => login will be displayed
{ path:"singin", component : LoginComponent},

// http://localhost:4200 => singup component will be displayed
{ path:"inscription", component : SignupComponent },

// http://localhost:4200 => admin Component will be displayed 
{ path:"admin", component: AdminComponent},

// http://localhost:4200 => add-match Component will be displayed
{path:"addmatch", component:AddMatcheComponent},

// http://localhost:4200 => add-player Component will be displayed
{path:"addplayer", component:AddPlayerComponent}, 
// http:localhost:4200 ==> add-team will be displayed
{path:"addteam",component:AddTeamComponent},
//http://localhost:4200 => matches
{path:"matches",component:MatchesComponent},
//http://localhost:4200 => teams
{path:"teams",component:TeamsComponent},
];

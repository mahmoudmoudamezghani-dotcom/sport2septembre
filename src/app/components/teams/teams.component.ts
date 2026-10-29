import { Component } from '@angular/core';
import { TeamComponent } from '../team/team.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-teams',
  imports: [TeamComponent,NgFor],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teamsTab: any = [
    { id: 1, name: "Team A", owner: "owner A", foundation: 2000 },
    { id: 2, name: "Team B", owner: "owner B", foundation: 1819 },
    { id: 3, name: "Team C", owner: "owner C", foundation: 1870 },
    { id: 4, name: "Team D", owner: "owner D", foundation: 1978 },
  ];


}

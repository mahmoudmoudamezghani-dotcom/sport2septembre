import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  imports: [NgFor],
  templateUrl: './teams-table.component.html',
  styleUrl: './teams-table.component.css'
})
export class TeamsTableComponent {

teamsTab : any =[
{id : 1, name:'team A',owner:"team A",foundation:1849,},
{id : 2, name:'team B',owner:"team B",foundation:1862,},
{id : 3, name:'team C',owner:"team C",foundation:1899,},
{id : 4, name:'team D',owner:"team D",foundation:1888,},
{id : 5, name:'team E',owner:"team E",foundation:1897,},
]


}

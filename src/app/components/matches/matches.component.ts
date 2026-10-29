import { Component } from '@angular/core';
import { ResultComponent } from '../result/result.component';

import { NgFor } from '@angular/common';


@Component({
  selector: 'app-matches',
  imports: [ResultComponent, NgFor],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {


  matchesData : any =[
    {id : 1 , scoreOne:0,scoreTwo:0,teamOne:'team A',teamTwo:'team B'},
    {id : 1 , scoreOne:4,scoreTwo:1,teamOne:'team C',teamTwo:'team D'},
    {id : 1 , scoreOne:1,scoreTwo:3,teamOne:'team E',teamTwo:'team F'},
    {id : 1 , scoreOne:2,scoreTwo:5,teamOne:'team G',teamTwo:'team H'},
    {id : 1 , scoreOne:3,scoreTwo:3,teamOne:'team I',teamTwo:'team J'},
  ]

}

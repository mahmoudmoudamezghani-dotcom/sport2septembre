
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
// obj : param de result component
@Input() obj:any={};



}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //proprety 
  title:string = "Home Page";
  cssClass:string="dropdown"
  // methode
  calcul(a:number,b:number){
    return a + b ;
  }

}

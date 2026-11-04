import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

   teamURL: string = "http://localhost:3000/teams";

  constructor(private httpClient:HttpClient ) { }
  //req 1
  getAllteames() {
    return this.httpClient.get(this.teamURL);
  }
  //req 2


  getteamById(id: number) {
    return this.httpClient.get(this.teamURL + "/" + id);
  }
  //req 3
  deleteteamById(id: number) {
    return this.httpClient.delete(this.teamURL + "/" + id);

  }
  //req 4
  addteam(team: any) {
    return this.httpClient.post(this.teamURL, team);
  }
  //req 5:
  editteam(newteam: any) {
    return this.httpClient.put(this.teamURL, newteam);
  }

}

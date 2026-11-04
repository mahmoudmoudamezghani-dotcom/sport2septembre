import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchURL: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  //req 1
  getAllMatches() {
    return this.httpClient.get(this.matchURL);
  }
  //req 2


  getMatchById(id: number) {
    return this.httpClient.get(this.matchURL + "/" + id);
  }
  //req 3
  deleteMatchById(id: number) {
    return this.httpClient.delete(this.matchURL + "/" + id);

  }
  //req 4
  addMatch(match: any) {
    return this.httpClient.post(this.matchURL, match);
  }
  //req 5:
  editMatch(newmatch: any) {
    return this.httpClient.put(this.matchURL, newmatch);
  }

}

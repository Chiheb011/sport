import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL: string = "http://localhost:3000/api/players";
  constructor(private httpClient: HttpClient) { }

  sendReqToAddPlayer(playerObj, avatar: File) {
    let formData = new FormData()
    formData.append("name", playerObj.name);
    formData.append("number", playerObj.number);
    formData.append("post", playerObj.post);
    formData.append("age", playerObj.age);
    formData.append("note", playerObj.note);
    formData.append("avatar", avatar);
    return this.httpClient.post<{ result: any }>(this.playerURL, formData);
  }

  sendReqToGetAllPlayers() {
    return this.httpClient.get<{ result: any }>(this.playerURL);
  }

  sendReqToGetPlayerById(id) {
    return this.httpClient.get<{ result: any }>(`${this.playerURL}/${id}`);
  }

  sendReqToDeletePlayerById(id) {
    return this.httpClient.delete<{ result: any }>(`${this.playerURL}/${id}`);
  }

  sendReqToEditPlayer(obj,) {
    return this.httpClient.put<{ message: any }>(`${this.playerURL}/${obj._id}`, obj);
  }

  sendReqToCalculateIMC(obj) {
    return this.httpClient.post<{ result: any, resultMessage: string }>(`${this.playerURL}/player-status`, obj)
  }
}

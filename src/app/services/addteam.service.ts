import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddteamService {
  teamURL:string="http://localhost:3000/players"; //adresse eli besh yemshilha fel backend
  constructor(private httpClient:HttpClient,
              private AddteamService:AddteamService
    
    ) { }
  sendReqToAddTeam(team:any ,img:File ){
    let formData = new FormData();
    formData.append('name',team.name);
    formData.append('foundation',team.foundation);
    formData.append('stadium',team.stadium);
    formData.append('country',team.country);
    formData.append('img',img);
    return this.httpClient.post<{message:string}>(this.teamURL , formData);
  }
}



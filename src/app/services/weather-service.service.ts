import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  
  weatherURL:string="http://localhost:3000/api/weather"
  constructor(private httpClient: HttpClient) {}
  //with Get method
  
  // searchBycity(city){
  //   return this.httpClient.get
  // }
  
  sendReqToGetweatherbyGet(city){
    return this.httpClient.get<{ result:any } > (`${this.weatherURL}/${JSON.stringify(city)}`)
  }
  
  // sendReqToGetweatherbyPost(city){
  //   return this.httpClient.get<{ result:any } > (`${}`)
  // }

}

import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpiderService {
  getSpiderService() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

sendData(){
  const header={
    'content-type': 'application/json',
    'x-api-key' : 'SdpE+UcQTW9h+MM4jJVNSg==G7KwQIAp8tyA80iO'

  }
  return this.http.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {headers:header})
}

}
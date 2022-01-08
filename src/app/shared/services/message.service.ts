import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append("Authorization", "Basic " + btoa(`${environment.sid}:${environment.authToken}`));

    return headers;
  }

  sendMessage(message: string, phoneNumber: string) {
    const body = new HttpParams()
    .set('Body', message)
    .set('From', environment.phoneNumber)
    .set('To', phoneNumber);

    return this.http.post(`${environment.smsUrl}2010-04-01/Accounts/${environment.sid}/Messages.json`, body, { headers: this.getHeaders() })
  }
}

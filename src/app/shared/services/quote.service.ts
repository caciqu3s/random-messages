import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('accept', 'application/hal+json');
    headers = headers.set('x-rapidapi-host', environment.rapidApiHost);
    headers = headers.set('x-rapidapi-key', environment.quoteApiKey);

    return headers;
  }

  getQuotes() {
    return this.http.get(`${environment.quoteUrl}`, { headers: this.getHeaders() });
  }
}

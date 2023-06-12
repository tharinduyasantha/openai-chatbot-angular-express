import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/enviornment';

@Injectable({
  providedIn: 'root'
})
export class OpenAiApiService {

  private apiUrl = environment.apiUrl; // Update with your Node.js server URL

  constructor(private http: HttpClient) { }

  public sendMessage(message: string) {
    return this.http.post<any>(`${this.apiUrl}/chat`, { message });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = 'https://manthanbackend.up.railway.app/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(message: ContactMessage): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, message, { headers, responseType: 'text' });
  }
}

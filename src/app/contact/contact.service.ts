// src/app/contact/contact.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactMessage } from '../models/contact-message.model';

const STORAGE_KEY = 'contactMessages';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private messages: ContactMessage[] = [];

  constructor() {
    const storedMessages = localStorage.getItem(STORAGE_KEY);
    if (storedMessages) {
      this.messages = JSON.parse(storedMessages);
    }
  }

  sendMessage(message: ContactMessage): Observable<string> {
    this.messages.push(message);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.messages));
    return of('Message stored in localStorage');
  }

  getMessages(): ContactMessage[] {
    return this.messages;
  }

  clearMessages(): void {
    this.messages = [];
    localStorage.removeItem(STORAGE_KEY);
  }
}

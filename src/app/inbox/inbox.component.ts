import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact/contact.service';
import { ContactMessage } from '../models/contact-message.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  messages: ContactMessage[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.messages = this.contactService.getMessages();
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1); // remove from local array
    localStorage.setItem('contactMessages', JSON.stringify(this.messages)); // update localStorage
  }
}

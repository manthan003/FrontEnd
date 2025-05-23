import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { ContactMessage } from '../models/contact-message.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  loading = false;
  messageSent = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    this.loading = true;
    const message: ContactMessage = this.contactForm.value;

    this.contactService.sendMessage(message).subscribe({
      next: () => {
        this.loading = false;
        this.messageSent = true;
        this.contactForm.reset();
        setTimeout(() => (this.messageSent = false), 3000);
      },
      error: (err) => {
        this.loading = false;
        console.error('Send failed:', err);
      }
    });
  }
}

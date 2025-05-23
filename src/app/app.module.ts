import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { InboxComponent } from './inbox/inbox.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ResumeComponent,
    InboxComponent

    
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule,ReactiveFormsModule],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
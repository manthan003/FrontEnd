import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: string = 'about';

  setView(view: string) {
    this.currentView = view;
  }
}
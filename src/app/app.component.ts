import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  title: string = '';
  date: string = '';
  submitted: boolean = false;
  submitForm() {
    this.submitted = true;
  }
}

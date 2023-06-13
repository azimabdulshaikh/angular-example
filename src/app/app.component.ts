import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tiles= [
    { cols: 3, rows: 1 },
    { cols: 1, rows: 2}
  ]
}

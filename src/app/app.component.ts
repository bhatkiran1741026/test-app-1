import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-app-1';

  // string interpolation

  serverId: number = 3320;
  serverName: string = 'https://localhost:3320/angular.io';
}

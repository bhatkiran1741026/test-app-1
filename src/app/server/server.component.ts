import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  // string interpolation
  serverId: number = 3320;
  serverName: string = 'https://localhost:3320/angular.io';

  //property binding
  accessble = true;
  constructor() {
    setTimeout(() => {
      this.accessble = false;
    }, 2000);
  }

  ngOnInit(): void {}
  //event binding
  serverStatus: string = 'Server is OFF';
  onClickBtn() {
    this.serverStatus = 'Server is ON';
  }

  // data passing with event binding

  serverData = '';

  onInput(event: Event) {
    this.serverData = (<HTMLInputElement>event.target).value;
    console.log(this.serverData);
  }

  // two way data binding with [(ngModel)] = "myName"
  myName: string = '';
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-one',
  templateUrl: './data-one.component.html',
  styleUrls: ['./data-one.component.css'],
})
export class DataOneComponent implements OnInit {
  @Input() parentData: string = '';

  constructor() {}

  ngOnInit(): void {}
}

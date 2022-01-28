import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-three',
  templateUrl: './data-three.component.html',
  styleUrls: ['./data-three.component.css'],
})
export class DataThreeComponent implements OnInit {
  @Output() childData = new EventEmitter<string>();

  addData(value: string) {
    console.log(value);
    this.childData.emit(value);
  }

  constructor() {}
  ngOnInit(): void {}
}

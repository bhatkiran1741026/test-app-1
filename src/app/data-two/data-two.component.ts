import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-two',
  templateUrl: './data-two.component.html',
  styleUrls: ['./data-two.component.css'],
})
export class DataTwoComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  constructor() {}

  ngOnInit(): void {}
}

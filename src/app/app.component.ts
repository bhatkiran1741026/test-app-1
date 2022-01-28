import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-app-1';
  parentData: string = 'hello kiran';

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  list = ['hello'];

  addList(newdata: string) {
    this.list.push(newdata);
  }

  dirList: number[] = [10, 20, 30, 40];
}

import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.models';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  board: Board = new Board('Test Board', [
    new Column ("To-Dos", [
      "Eat",
      "Grind",
      "Sleep",
      "Repeat"
    ]),
    new Column ("Done", [
      "Gym",
      "Dishes",
      "Clean",
      "Running"
    ]),
    new Column ("Dream", [
      "New Car",
      "New House",
      "New Boat",
      "New Shoes",
      "Race Car",
      "Corvette"
    ]),
    new Column ("Action Items", [
      "Dentist",
      "Open enrollment",
      "Taxes",
      "Christmas Shopping",
      "Letter to Santa"
    ])
  ]);
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

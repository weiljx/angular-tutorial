import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() task!: Task;

  editMode: boolean = false;

  editTask() {
    this.editMode = true;
  }

  saveTask() {
    this.editMode = false;
  }

}

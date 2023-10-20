import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.interface';
import { TaskService } from './../../services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  listName: string = 'Task List';
  listDescription: string = 'This is a list of tasks.';
  tasks: Array<Task> = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.tasks;
  }

  getCompleteTaskCount(): number {
    return this.tasks.filter((task: Task) => task.completed).length;
  }
}

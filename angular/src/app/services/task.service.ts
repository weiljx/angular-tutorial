import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Array<Task> = [];

  private nextTaskId: number = 1;

  constructor() {
    // load the tasks when the service is created
    this.getTasks().subscribe((tasks: Array<Task>) => {
      this.tasks = tasks;
    });
  }

  private getTasks(): Observable<Array<Task>> {
    // Normally we would make a call to a back end service using restful http calls
    // for this demo we emulate that using the of() method from rxjs
    const mockTasksResponse: Array<Task> = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
      { id: 3, title: 'Task 3', completed: false }
    ];
    this.nextTaskId = mockTasksResponse.length + 1;
    return of(mockTasksResponse);
  }

  addTask(task: Task): void {
    task.id = this.nextTaskId++;
    this.tasks.push(task);
  }

  // Not Implemented
  deleteTaskById(id: number): void {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
  }

}

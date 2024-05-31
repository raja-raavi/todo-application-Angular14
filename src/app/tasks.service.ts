import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  count=1;
  tasks = [
    {'id': this.count++, 'task': 'goto gym at 6pm'},
    {'id': this.count++, 'task': 'Learn Angular'},
  ]

  addTaskToTaskList(taskName:any) {
    this.tasks.push({'id':this.count++, 'task':taskName})
  }

  deleteTask(index:number) {
    this.tasks.splice(index,1)
  }
}

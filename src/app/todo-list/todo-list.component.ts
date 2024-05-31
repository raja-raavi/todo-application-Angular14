import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(private service:TasksService){
  }

  listOfTasks:any;
  ngOnInit() {
      this.listOfTasks = this.service.tasks
  }

  deleteTask(i:number) {
    this.service.deleteTask(i)
  }
}

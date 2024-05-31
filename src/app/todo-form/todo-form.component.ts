import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  inputTask:string = "";
  constructor(private service:TasksService){

  }
  addTask() {
    this.service.addTaskToTaskList(this.inputTask);
    this.inputTask = "";
  }

  resetTask() {
    this.inputTask = ""
  }
}

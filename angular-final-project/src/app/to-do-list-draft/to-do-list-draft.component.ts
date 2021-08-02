import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { Task } from '../task';
// import { task } from '../tasks/tasks.component';

@Component({
  selector: 'app-to-do-list-draft',
  templateUrl: './to-do-list-draft.component.html',
  styleUrls: ['./to-do-list-draft.component.css']
})
export class ToDoListDraftComponent implements OnInit {

  constructor() { }

  // controls icon change and task edit property change
  // use editState flag to enable task deletion?
  public icon = 'edit';
  taskEditState: boolean = false;
  toggleEdit() {
    this.taskEditState = !this.taskEditState
    
    if (this.taskEditState) {
      this.icon = 'done';
      console.log("EDIT MODE: " + this.taskEditState)
    } else {
      this.icon = 'edit'
      console.log("EDIT MODE: " + this.taskEditState)
    }
  }

  ngOnInit(): void {
  }

}

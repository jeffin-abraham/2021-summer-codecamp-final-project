import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent implements OnInit {

  createTask: Boolean = false;
  addNewTask(){
    this.createTask = !this.createTask
    
    console.log("Adding new task...")
  };

  constructor() { }

  ngOnInit(): void {
  }

}

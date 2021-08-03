import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent implements OnInit {

  list:any[] = [];

  addTask(item:string){
    this.list.push({id:this.list.length, name:item})
    console.warn(this.list);
  }

  removeTask(id:number){
    this.list=this.list.filter(item=>item.id !== id);
    console.warn(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

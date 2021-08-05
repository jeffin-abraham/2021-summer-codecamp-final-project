import { Column } from 'src/app/models/column.model';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  list:any[] = [];

  addTask(columnIndex: number, item:string){
    this.list.push({id:this.list.length, name:item})

    this.board.columns[columnIndex].tasks.push(item);

    // console.warn(this.list);
  }

  removeTask(id:number){
    this.list = this.list.filter(item=>item.id !== id);
    console.warn(id);
  }

  constructor() { }

  board: Board = new Board('Test Board',[
    new Column ('Ideas',[]),
    new Column ('Rearch',[]),
    new Column ('Todo',[]),
    new Column ('Done',[])
  ]);

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}

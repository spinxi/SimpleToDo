import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//Custom components import
import { EmptyComponent } from '../empty/empty.component';
import { AdditionComponent } from '../addition/addition.component';
//Service import
import { TodoService } from '../../todoApiService/api-service.service';

import { ITask } from "../../interfaces/Task";

import { ToastrService } from 'ngx-toastr';// For toasts

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule, 
    EmptyComponent,
    AdditionComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})



export class ListComponent implements OnInit{
  // Empty component message
  passMessage: string = 'სამწუხაროდ დამატებული დავალებები ჯერ არ მოიძებნება. ';

  // this is for pass current task into edit form
  selectedTask: ITask = { id: 0, name: '', status: undefined, createDate: '' };
  //Edit button
  editMode: 'add' | 'edit' = 'add';
  editTask(task: ITask) {
    this.selectedTask = task;
    this.editMode = "edit";
  }
  
  // Data
  completedTasks: ITask[] = [];
  inProgressTasks: ITask[] = [];
  //constructor
  constructor(private todoService: TodoService, private toastr: ToastrService) {}


  ngOnInit() {
    // Call API to Get data
    this.getData();
  }

  getData() {
    
    this.todoService.getData().subscribe({
      next: (data: ITask[]) => {
        this.completedTasks = data.filter((task: ITask) => task.status === 2);
        this.inProgressTasks = data.filter((task: ITask) => task.status === 1);
      },
      error: error => {
        throw error;
      }
    });
  }

  //DELETE DATA

  deleteTask(taskId: number) {
    this.todoService.deleteData(taskId).subscribe({
      next: () => {
        this.toastr.success('Task deleted!', '', {
          timeOut: 3000,
          progressBar: true,
          tapToDismiss: true,
          positionClass: "toast-bottom-right",
        });
        this.getData();
        this.selectedTask = { id: 0, name: '', status: undefined, createDate: '' };
        this.editMode = "add";
      },
      error: (error: any) => {
        console.error('Error: ', error);
      }
    });
  }


  // Function to check if we got any data
  checkData(): boolean {
    return this.completedTasks.length > 0 || this.inProgressTasks.length > 0;
  }
  //For catch ffrom Addition.components.ts if data is POSTED, deleted or edited, to refresh data.
  onTaskPosted() {
    this.getData(); 
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { EmptyComponent } from '../empty/empty.component';
import { CommonModule } from '@angular/common';
import { ITask } from "../../interfaces/Task";
import { TodoService } from '../../todoApiService/api-service.service';
import { ToastrService } from 'ngx-toastr';// For toasts
@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [
    NgSelectModule,
    FormsModule,
    EmptyComponent,
    CommonModule,
  ],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {
  // Empty component message
  passMessage: string = 'სამწუხაროდ დამატებული დავალებები ჯერ არ მოიძებნება. ';

  // Select status options
  statuses:any = [
    { value: 1, label: 'მიმდინარე სტატუსი' },
    { value: 2, label: 'დასრულებული სტატუსი' },
  ];
  //Constructor
  constructor(private todoService: TodoService, private toastr: ToastrService) {}

  // POST && EDIT Data
  postData() {
    //Check data and display toaster for errors.
    if (!this.selectedTask || !this.selectedTask.name || !this.selectedTask.status) {
      this.successToast("Name and status are required fields!");
      return;
    }
    //Here I will check if mode is add or edit
    //if add, then POST data
    if (this.mode === 'add') {
      this.todoService.postData(this.selectedTask).subscribe({
        next: () => {
          //Send signal
          this.taskPosted.emit(); 
          //display Toast
          this.successToast("Task Added!");
          //Reset form
          this.selectedTask = { id: 0, name: '', status: undefined, createDate: '' };
        },
        error: (error: any) => {
          console.error('Error: ', error);
        }
      });
    } else if (this.mode === 'edit') {
      this.todoService.putData(this.selectedTask).subscribe({
        next: () => {
          //Send signal 
          this.taskPosted.emit(); 
          //display Toast
          this.successToast("Task updated!");
          //Reset form
          this.selectedTask = { id: 0, name: '', status: undefined, createDate: '' };
        },
        error: (error: any) => {
          console.error('Error: ', error);
        }
      });
    }
  }


  //for toasts
  successToast(description: string){
    this.toastr.success(description, '', {
      timeOut: 3000,
      progressBar: true,
      tapToDismiss: true,
      positionClass: "toast-bottom-right",
    });
  }
  errorToast(description: string){
    this.toastr.error(description, '', {
      timeOut: 3000,
      progressBar: true,
      tapToDismiss: true,
      positionClass: "toast-bottom-right",
    });
  }
  
  //For send signal
  @Output() taskPosted: EventEmitter<void> = new EventEmitter<void>();
  // Get boolean. We check if we got any data or not
  @Input() checkData: boolean = false;
  @Input() selectedTask: ITask = { id: 0, name: '', status: undefined, createDate: '' };
  //for edit button
  @Input() mode: 'add' | 'edit' = 'add';
}

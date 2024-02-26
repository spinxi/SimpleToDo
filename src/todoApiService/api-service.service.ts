import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { ITask } from "../interfaces/Task";
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl: string = `${environment.apiUrl}/api/todo`;

  constructor(private http: HttpClient) {}

  //GET data
  getData(): Observable<any> {
    return this.http.get(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    );
  }
  //POST data
  postData(task: ITask): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, task, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  //EDIT data
  putData(task: ITask): Observable<any> {
    const url = `${this.apiUrl}/${task.id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, task, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  //Delete data
  deleteData(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError)
    );
  }

  // For errors
  private handleError(error: any): Observable<any> {
    console.error(error);
    return throwError(() => new Error(error));
  }
}

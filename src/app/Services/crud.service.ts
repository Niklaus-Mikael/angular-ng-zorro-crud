import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Todo } from '../todo';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class CrudService {
  private apiUrl = "http://localhost:5000/todo"
  constructor(private http:HttpClient) { }

  todo!: Todo;
  getTodo():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl);
  }

deleteTodo(todo : Todo):Observable<Todo>{
  const url = `${this.apiUrl}/${todo.id}`;
  return this.http.delete<Todo>(url);
}
addTodo(todo:Todo):Observable<Todo>{
  return this.http.post<Todo>(this.apiUrl,todo,httpOptions);
}

updateTodo(todo:Todo):Observable<Todo>{
 
 this.todo=todo;
  console.log(this.todo);
  console.log("this is put service ");
  const url = `${this.apiUrl}/${this.todo.id}`;
  console.log(url);
  return this.http.put<Todo>(url,todo,httpOptions);
}

getSelectedTodo(id:number ):Observable<Todo>{
  const url = `${this.apiUrl}/${id}`;
return this.http.get<Todo>(url);
}
}

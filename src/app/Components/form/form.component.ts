import { Component, OnInit,Output,EventEmitter ,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
@Output() onSubmitTodo : EventEmitter<Todo> = new EventEmitter();

editTodoItem !:Todo;
@Input()
public set updateTodo(todo:Todo) 
{
  this.editTodoItem = todo;
  this.id =this.editTodoItem.id;
  this.userId = this.editTodoItem.userId;
  this.title = this.editTodoItem.title;
  this.body = this.editTodoItem.body;
}

  constructor(private router : Router) { }

  id !:number | undefined;
  userId !:number;
  title !:string;
  body !:string;
 

  onSubmit(form : NgForm) {
    if (!this.body) {
      alert('Please add a Mesasge!');
      return;
    }

      const newTodo:Todo = {
        id:this.id,
        userId : this.userId,
        title:this.title,
        body:this.body
       };
    
  
    console.log(newTodo);
    console.log("form message");

  this.onSubmitTodo.emit(newTodo);

  form.resetForm();
  location.reload();
  }
  


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/todo';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faTimes=faTimes;
  isVisible = false;
  todos:Todo[]=[];
  constructor(private crudService :CrudService) { }

  closeModal!: string;
  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  addTodo(todo: Todo) {
   this.crudService.addTodo(todo).subscribe((todo) => this.todos.push(todo));
   alert("New Todo Added");
   this.isVisible=false;
   }

}

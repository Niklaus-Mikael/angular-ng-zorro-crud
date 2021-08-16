import { Component, OnInit, } from '@angular/core';
import { faTimes,faEdit,faComment } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from 'src/app/Services/crud.service';
import { Todo } from 'src/app/todo';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos !: Todo[];
todo!:Todo;
  faTimes = faTimes;
  faEdit = faEdit;
  faComment = faComment;
  isVisible = false;
  
  constructor(private crudService:CrudService,
    private router : Router ) { }


  ngOnInit(): void {
    this.crudService.getTodo().subscribe((todo) => (this.todos = todo ));
    
  }

  onDelete(todo:Todo){
    this.crudService
    .deleteTodo(todo)
    .subscribe(
      () => (this.todos = this.todos.filter((t) => t.id !== todo.id))
    );
  }

  onEdit(id:any){
this.router.navigateByUrl("/Edit/"+id);

  }

  showModal(id:any): void {
    this.isVisible = true;
    this.crudService.getSelectedTodo(id).subscribe((todo) => (this.todo = todo ));
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
   updateTodo(todo:Todo){
    console.log(todo);
   console.log("edit component ");
    this.crudService.updateTodo(todo).subscribe((todo)=> this.todo = todo);
  }
}

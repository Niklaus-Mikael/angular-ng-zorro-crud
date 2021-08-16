import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { Todo ,Comment} from 'src/app/todo';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/Services/comment.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
todo  !: Todo;
id !: number;
likes=10;
likesFlag=false;
dislikeFlag=false;
dislikes =10;
pageSize=5;
pageIndex=1;
start = 0;
end = this.start + this.pageSize;
comments : Comment[] = [] 
  constructor(private crudService : CrudService,private commentService : CommentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.onLoad();
  }

  onLoad(){
    this.id = Number( this.route.snapshot.paramMap.get('id'));
    this.crudService.getSelectedTodo(this.id).subscribe((todo) => (this.todo = todo ));
    this.commentService.getComments(this.id).subscribe((c)=>(this.comments=c));
    
  }

  onLike(){
    this.likesFlag=!this.likesFlag;
    
    if(this.likesFlag){
    this.likes+=1;
    this.dislikeFlag=false;
     
    if(this.dislikes>0){
      this.dislikes -= 1;
    }else{
      this.dislikes = 0;
    }
    
    }else{
      this.likes-=1;
    }
  }
  onDisLike(){
    this.dislikeFlag=!this.dislikeFlag;
    if(this.dislikeFlag){
    this.dislikes+=1;
    this.likesFlag=false;
    if(this.likes>0){

      this.likes-=1
    }else{
      this.likes = 0;
    }
    
    }else{
      this.dislikes-=1;
    }
  }

  onPageIndexChange(id:any){
    
    this.start= (id-1) * this.pageSize;
   this.end =  this.start + this.pageSize;
   console.log("start :",this.start);
   console.log("end : ",this.end)

  }


}

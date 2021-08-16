import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Comment } from 'src/app/todo';
import { CommentService } from 'src/app/Services/comment.service';
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  validateForm!: FormGroup;
  @Input() postId !: number;
  comment !:Comment;
  constructor(private fb: FormBuilder,private commentService : CommentService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      comment: [null, [Validators.required]],
     
    });
  }
  

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if(this.validateForm.controls["userName"].value !== null && this.validateForm.controls["comment"].value !== null ){
    console.log(this.validateForm.controls["userName"].value);
    this.comment={
      postId : this.postId,
      name:this.validateForm.controls["userName"].value,
      body:this.validateForm.controls["comment"].value
    }
    console.log(this.comment);
    this.commentService.postComment(this.comment).subscribe((c)=>this.comment=c);
    
    location.reload();
    }
  }

  
}

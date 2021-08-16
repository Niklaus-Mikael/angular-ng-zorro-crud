import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../todo';
import { HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  //http://localhost:5000/comments?postId=3 get by post id
   apiUrl = "http://localhost:5000/comments?postId=";


   getComments(postId : number):Observable<Comment[]>{
     const url = this.apiUrl+postId;
     return this.http.get<Comment[]>(url);
   }

   postComment(comment:Comment):Observable<Comment>{
    const url = "http://localhost:5000/comments";
    return this.http.post<Comment>(url,comment,httpOptions);
   }



}

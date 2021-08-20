import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getUserInfo(userName : string):Observable<Auth>{
    const url = `http://localhost:5000/auth?username=${userName}`;
    return this.http.get<Auth>(url);
  }



  
}

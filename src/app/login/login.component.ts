import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators} from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { Auth } from '../auth';
import { setRole } from '../util/session-storage';
import { Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
auth!:Auth;
  constructor(private fb:FormBuilder,private loginServ:LoginService,private route:Router,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  

  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    } 
    if(this.validateForm.valid){
      
      //if(this.validateForm.value.password===this.auth.password){
        //setRole(this.auth.token);
        this.loginServ.getUserInfo(this.validateForm.value.userName).subscribe((auth)=>this.auth=auth);
        if(this.auth){
        console.log(this.validateForm.value);
        console.log(this.auth);
        setRole(this.auth.token);
       let  returnUrl = this.actRoute.snapshot.queryParams['returnUrl'] || '/';
        this.route.navigateByUrl(returnUrl);
        } 
      //}

      
    }
  }




}

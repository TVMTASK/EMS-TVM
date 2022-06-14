import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm! : FormGroup
  constructor(private toaster:ToastrService,private formBuilder: FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
email:[''],
password:['']
    })
  }

  login(){
this.http.get<any>("http://localhost:3000/signupUsers")
.subscribe(res=>{
const user = res.find((a:any)=>{
return a.email === this.loginForm.value.email  &&  a.password === this.loginForm.value.password
});
if(user){
  alert('login success');
  this.loginForm.reset();
  this.router.navigate(['career'])
}else{
  alert('user not found');
}
},err=>{
  this.toaster.error('something went wrong');
  alert('something went wrong');
})
  }
}

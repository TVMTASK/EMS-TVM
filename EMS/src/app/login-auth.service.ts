import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  loginSucess=false;
  empID="";
  constructor(private api:ApiService) { }

 loginAuth(loginForm:FormGroup){
   
   this.api.getCredentials().subscribe(res=>
    {
      const user = res.posts.find((a:any)=>{
      return a.email === loginForm.value.email  &&  a.password ===loginForm.value.password
      });
  if(user){
    
    this.loginSucess=true;
    console.log("trueeeeeee")
  }else{
  
     this.loginSucess=false;
    console.log("false")
  }
  },err=>{
   this.loginSucess=false;
   console.log("falseeeeee")
  }

);
//get emp id
this.api.getEmpProfile().subscribe(res=>
  {
    res.contactInfo.find((user:any)=>
    {
      if(user.personalEmail===loginForm.value.email)
      {
       this.empID=user.employeeID;
       console.log(" this.empID==="+ this.empID)
      }
     
    })
  })

 
}
}

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/api.service';
import { LoginAuthService } from 'src/app/login-auth.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 // loginSucess=false;
  //empID="";
  public loginForm! : FormGroup
  constructor(private toaster:ToastrService,private formBuilder: FormBuilder, private api:ApiService, private router : Router,private logAuth:LoginAuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email:[''],
    password:['']
    })
  }

   login(){


    this.logAuth.loginAuth(this.loginForm);


    if(this.logAuth.loginSucess && this.logAuth.empID)
    {
     
      const routeURL='profile/'+this.logAuth.empID;
      //console.log("URL ==>"+routeURL)
      this.router.navigate([routeURL])
     
    }
    else
    {
     
      this.toaster.error('Please enter valid credentials');

    }
  
    
  }
}

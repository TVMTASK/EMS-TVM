import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,} from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  constructor(private FormBuilder : FormBuilder ,private http : HttpClient,private toaster: ToastrService,
    private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
    // "id": 2,
    //   "name": "nandhini",
     //   "mobile": "9566279415",
    //   "email":"nandhini@gmail.com",
    //   "password":"password"
  }

  signUp(){
    this.api.getEmployee()
    .subscribe(res => {
      debugger
      res.post.push(this.signupForm.value)
      this.signupForm.reset();
      this.router.navigate(['login']);
     },)

}
}


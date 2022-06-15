import { ApiService } from './../../app/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private toaster: ToastrService, private formBuilder: FormBuilder,
    private http: HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
    this.api.getEmployee().subscribe((x)=>{
      debugger;
    });
  }

  login() {

    this.api.getEmployee()
      .subscribe(res => {
        const user = res.posts.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if (user) {
          alert('login success');
          this.loginForm.reset();
          this.router.navigate(['home'])
        } else {
          alert('user not found');
        }
      }, err => {
        this.toaster.error('something went wrong');
        alert('something went wrong');
      })
  }
}

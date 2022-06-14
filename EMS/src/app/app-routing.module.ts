import { CareerComponent } from './career/career.component';
import { SignupComponent } from './signup/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
 { path: 'login', component: LoginComponent },
 {path: 'signup', component:SignupComponent},
 {path: 'career', component:CareerComponent},
 {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { CareerComponent } from './career/career.component';
import { SignupComponent } from './signup/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
 { path: 'login', component: LoginComponent },
 {path: 'signup', component:SignupComponent},
 {path: 'career', component:CareerComponent},
 {path:'profile',component:ProfileComponent},
 {path:'home',component:HomeComponent},
  {path:'',pathMatch:'full',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

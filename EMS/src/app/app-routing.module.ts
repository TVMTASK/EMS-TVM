import { CareerComponent } from './career/career.component';
import { SignupComponent } from './signup/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/login'},
 { path: 'login', component: LoginComponent },
 {path: 'signup', component:SignupComponent},
 {path: 'career', component:CareerComponent},
 {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
 {path:'home',component:HomeComponent},
 {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent },
 {path:'home',component:HomeComponent},
 {path:'profile',component:ProfileComponent},
 {path:'',pathMatch:'full',redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

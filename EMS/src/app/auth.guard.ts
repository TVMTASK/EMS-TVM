import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from './login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private logAuth:LoginAuthService){}
   
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

      if(this.logAuth.loginSucess)
      {
    return true;
      }
      else
      return false;
  } 
  
}

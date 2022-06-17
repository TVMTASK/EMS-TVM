import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  getEmpProfile(){
    const profileURL="/assets/Employee/profile.json";
    return this.http.get<any>(profileURL).pipe(map((res:any)=>
    {
      return res;
    }))
  }

}
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getEmployee(){
    return this.http.get<any>("/assets/Employee/employee.json")
    .pipe(map((res:any)=>{
      debugger;
      return res;
    }))
  }

}

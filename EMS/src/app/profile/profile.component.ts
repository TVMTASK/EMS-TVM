import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  date=new Date();
  empID="AIPL15425";
  basicInfo:any="";
  contactInfo:any="";
  domains:any[]=[];

  constructor(private api:ApiService) {
    
   }

  ngOnInit(): void {
    this.api.getEmpProfile().subscribe(profileData=>
      {
        //console.log(basicInfoData);
        this.basicInfo=profileData.basicInfo.find((userRec:any)=>
        {
          if( userRec.employeeID===this.empID)
          {
            
            return this.basicInfo=userRec;
          };
        });
      })
      this.api.getEmpProfile().subscribe(profileData=>
        {
         
          this.contactInfo=profileData.contactInfo.find((userRec:any)=>
          {
            if( userRec.employeeID===this.empID)
            {
              
              return this.contactInfo=userRec;
            };
          });
        })
        this.api.getEmpProfile().subscribe(profileData=>
          {
           
         profileData.domains.find((userRec:any)=>
            {
              if( userRec.employeeID===this.empID)
              {
                console.log("user Record==>"+userRec.code)
                this.domains.push(userRec);
              };
            }
             );
          })
        
  }

}

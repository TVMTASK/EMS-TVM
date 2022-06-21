import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  date=new Date();
  empID="AIPL15426";
  basicInfo:any="";
  contactInfo:any="";
  domains:any[]=[];
  dependents:any[]=[];
  totalDependents=0;
  showMoreDependents=false;
  showDependentsButton=false;
  hideDependentsButton=false;

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
        }),
        profileData.dependents.find((userRec:any)=>
        {
          if(userRec.employeeID===this.empID)
          {
            console.log("user Record of dependent==>"+userRec.dependentFName)
    
            this.dependents.push(userRec); 
          }
        });
        this.totalDependents=this.dependents.length;
        if(this.totalDependents>1)
        {
          this.showDependentsButton=true;
        }
      
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

  showDependents()
  {
    this.showMoreDependents=true;
    this.showDependentsButton=false;
    this.hideDependentsButton=true;
  }
  hideDependents()
  {
    this.showMoreDependents=false;
    this.showDependentsButton=true;
    this.hideDependentsButton=false;
  }

}

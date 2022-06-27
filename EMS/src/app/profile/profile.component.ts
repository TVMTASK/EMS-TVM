import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  date=new Date();
  empID="";
  basicInfo:any="";
  contactInfo:any="";
  empDetails:any="";
  domains:any[]=[];
  dependents:any[]=[];
  totalDependents=0;
  showMoreDependents=false;
  showDependentsButton=false;
  hideDependentsButton=false;


  constructor(private activatedRoute: ActivatedRoute,private api:ApiService) {
    
   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data =>
      {
        this.empID=data['id'];

      });
    this.api.getEmpProfile().subscribe(profileData=>
      {
        //console.log(this.date);
        this.basicInfo=profileData.basicInfo.find((userRec:any)=>
        {
          if( userRec.employeeID===this.empID)
          {         
            return this.basicInfo=userRec;
          };
        }),
        //pulling dependents records

        profileData.dependents.find((userRec:any)=>
        {
          if(userRec.employeeID===this.empID)
          {
           // console.log("user Record of dependent==>"+userRec.dependentFName)
    
            this.dependents.push(userRec); 
          }
        });
        this.totalDependents=this.dependents.length;
        if(this.totalDependents>1)
        {
          this.showDependentsButton=true;
        }
        //Pulling emplyment details
        profileData.employmentDetails.find((userRec:any)=>
        {
          if(userRec.employeeID===this.empID)
          {
            return this.empDetails=userRec;
          }
        })
      
      })
      //pulling contact info records
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
        //pulling domain records
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

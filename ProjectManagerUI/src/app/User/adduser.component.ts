import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { User } from 'src/app/User.model';
import { ChangeDetectorRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  sub: any;
  user:User= {
    User_Id:null,
    First_Name:null,
    Employee_id:null,
    Last_Name:null,
 
    }
    userData:User[];
    @ViewChild('employeeForm') formValues; // Added this
    showMsg: boolean = false;
     updateMsg:boolean=false;

  constructor(private _service : SharedService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() { 

    this._service.getAllUser().subscribe(
    userdata=>this.userData=userdata
  );

  this.userData

  this.sub = this._route.params.subscribe(params => {
    const id = +params['id']; // (+) converts string 'id' to a number
    console.log(id);
    if(id===0)
    {
     this.user={
        User_Id:null,
        First_Name:null,
        Employee_id:null,
        Last_Name:null,
     
        }
    }
    else
    {
    this._service.getUserByID(id).subscribe(taskData=>this.user=taskData);
  }
});
}
  saveEmployee()
  {
    console.log(this.user);
    if(this.user.User_Id===null)
    {
   return this._service.saveUser(this.user).subscribe(
    (data: User) => {
      // log the employee object after the post is completed
      console.log(data);
      this.formValues.reset();
      this.showMsg= true;
      this.updateMsg= false;
      this.ngOnInit();
    } );

  }

else
{

  return this._service.updateTask(this.user).subscribe(
   (data: User) => {
     // log the employee object after the post is completed
     console.log(data);
     
      this.updateMsg= true;
      this.showMsg= false;
      this.formValues.reset();
      this.ngOnInit();
      

   });
}
  }
}

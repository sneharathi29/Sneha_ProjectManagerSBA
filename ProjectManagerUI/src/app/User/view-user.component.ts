import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { User } from 'src/app/User.model';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user:User[];
  @Input() userData:User[];
  searchUser:string;
  column: any;
  showMsg: boolean=false;
  
  constructor(private _route:Router,private _shared:SharedService) { }
  isDesc: boolean = false;

  ngOnInit() {

    this._shared.getAllUser().subscribe(
      userdata=>this.userData=userdata
    );
  }
  DeleteUser(userId:number)
  {
this._shared.deleteUser(userId).subscribe(
  () => {console.log(`Employee with ID = ${userId} Deleted`),
      (err) => console.log(err);
      this.showMsg=true;
     this.ngOnInit();

  }

)
  }

  editUser(userId:number)
  {
    console.log(userId);
    this._route.navigate(['edit',userId]);
    
  }
 
sortByFName(property)
  {
    console.log(property)
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.userData.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });

}
}

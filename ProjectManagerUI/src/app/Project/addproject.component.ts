import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../Project.model';
import { SharedService } from '../shared.service';
import { User } from '../User.model';
import { ProjectService } from '../project.service';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  userData: User[];
  projectData: Project[];
  @ViewChild('projectForm') formValues; // Added this
projectDetails:Project;

  project: Project = {
    Project_Id: null,
    Project_Name: null,
    Start_Date: null,
    End_Date: null,
    Priority: 0,
    SetDateCheckBox: null,
    Manager_Id: null,
    No_Of_Task: null,
    Completed_Task: null
  }
  showMsg: boolean = false;
  updateMsg: boolean = false;
  sub: any;
  searchUser:string;
  constructor(private _shared: SharedService,
     private _projectService: ProjectService,
    private _route:ActivatedRoute) { }

  ngOnInit() {

    this._shared.getAllUser().subscribe(user => this.userData = user);
    this._projectService.getAllProject().subscribe(data => this.projectData = data);


  this.sub = this._route.params.subscribe(params => {
    const id = +params['id']; // (+) converts string 'id' to a number
    console.log(id);
    if(id===0)
    {
     this.project={
      Project_Id: null,
      Project_Name: null,
      Start_Date: null,
      End_Date: null,
      Priority: 0,
      SetDateCheckBox: null,
      Manager_Id: null,
      No_Of_Task: null,
      Completed_Task: null
     
        }
    }
    else
    {
    this._projectService.getProjectByID(id).subscribe(taskData=>this.project=taskData    
    );
    
  }
});
  }

  GetId(empID: number) {
    this.project.Manager_Id = empID;
    $('#managerId').val(empID);
    $('#exampleModal').modal('hide');

  }
  setDate() {
    let sDate = new Date();
    const today = new Date();
    if(this.project.Start_Date==null)
    {
    this.project.Start_Date=sDate;
    this.project.End_Date = new Date(today.setDate(today.getDate() + 1));
    }
    /* this.project.Start_Date = new Date().toISOString().split('T')[0];
    this.project.End_Date = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0]; */
  }

  saveProject() {
    console.log(this.project);
    if (this.project.Project_Id === null) {
      return this._projectService.saveProject(this.project).subscribe(
        (data: Project) => {
          // log the employee object after the post is completed
          console.log(data);
          this.formValues.reset();
          this.showMsg = true;
          this.updateMsg = false;
          this.ngOnInit();
        });

    }

    else {

        return this._projectService.updateProject(this.project).subscribe(
         (data: Project) => {
           // log the employee object after the post is completed
           console.log(data);
           this.formValues.reset();
            this.updateMsg= true;
            this.showMsg= false;
            
            this.ngOnInit();
            
      
         });
    }

  }
}

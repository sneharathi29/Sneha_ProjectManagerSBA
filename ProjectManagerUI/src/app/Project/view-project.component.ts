import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../Project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

@Input() projectData:Project[];
data:Project[];
  isDesc: boolean=false;
  column: any;
  searchUser:string;

  constructor(private _route:Router,private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe(data => this.projectData = data);

  }

  editProject(projectId:number)
  {

    this._route.navigate(['editproject',projectId])
  }

  SuspendProject(projectId:number)
  {
this.projectService.deleteProject(projectId).subscribe(
  () => {console.log(`Project with ID = ${projectId} Deleted`),
      (err) => console.log(err);
     this.ngOnInit();

  }

)
  }
  getProjectData()
  {
   this.projectService.getAllProject().subscribe(data => this.data = data);
  }

  sortByFName(property)
  {
    console.log(property)
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.projectData.sort(function(a, b){
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

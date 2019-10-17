import { Injectable } from '@angular/core';
import { Project } from './Project.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _url:string = "http://localhost/ProjectManagerAPI/API/Project";
  
  constructor(private _httpClient:HttpClient) { }


  
  
  getAllProject():Observable<Project[]>{

    return this._httpClient.get<Project[]>(this._url);
    
  }
  

  saveProject(project:Project):Observable<Project>{

    return this._httpClient.post<Project>(this._url,project, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
  }

  getProjectByID(projectId:number): Observable<Project>{

    return this._httpClient.get<Project>(`${this._url}/${projectId}`);
  }
  updateProject(user:Project):Observable<Project>
  {
console.log("From Service : " +user);
    return this._httpClient.put<Project>(this._url,user,
      {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    })
    
  }

deleteProject(id:number):Observable<void>{
  console.log(id);
return this._httpClient.delete<void>(`${this._url}/${id}`);

}
}

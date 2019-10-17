import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parent } from './Parent.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './Task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _url:string="http://localhost/ProjectManagerAPI/API/task";
  constructor(private _httpClient:HttpClient) { }

  getAllParent():Observable<Parent[]>{

    return this._httpClient.get<Parent[]>(this._url+'/getallparent');

  }

  SaveTask(task:Task):Observable<Task>{

    return this._httpClient.post<Task>(this._url,task,
      {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
  })
}

getTaskList():Observable<Task[]>
{

  return this._httpClient.get<Task[]>(this._url);
}

updateTask(user:Task):Observable<Task>
    {
console.log("From Service : " +user);
      return this._httpClient.put<Task>(this._url,user,
        {
          headers: new HttpHeaders({
              'Content-Type': 'application/json'
          })
      })
      
    }

deleteUser(id:number):Observable<void>{
  console.log(id);
return this._httpClient.delete<void>(`${this._url}/${id}`);

}

getUserByID(id:number):Observable<Task>{

  return this._httpClient.get<Task>(`${this._url}/${id}`);
}


}

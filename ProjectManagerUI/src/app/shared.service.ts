import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './User.model';
import { Observable } from 'rxjs';
import {map, catchError} from 'rxjs/operators'
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _url :string="http://localhost/ProjectManagerAPI/API/users";
  constructor(private _httpClient:HttpClient) { }

  saveUser(employee: User): Observable<User> {
     
        return this._httpClient.post<User>(this._url,
            employee, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            })
            
       
} 

updateTask(user:User):Observable<User>
    {
console.log("From Service : " +user);
      return this._httpClient.put<User>(this._url,user,
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

getUserByID(id:number):Observable<User>{

  return this._httpClient.get<User>(`${this._url}/${id}`);
}

getAllUser():Observable<User[]>{

  return this._httpClient.get<User[]>(this._url);
}
}

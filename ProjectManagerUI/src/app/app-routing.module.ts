import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddprojectComponent } from 'src/app/Project/addproject.component';
import { AdduserComponent } from 'src/app/User/adduser.component';
import { AddtaskComponent } from 'src/app/Task/addtask.component';
import { ViewtaskComponent } from 'src/app/Task/viewtask.component';
import { UpdateComponent } from './Task/update.component';

const routes: Routes = [
{path :"editproject/:id",component:AddprojectComponent},
{path :"edit/:id", component:AdduserComponent},
{path :"task", component:AddtaskComponent},
{path :"view", component:ViewtaskComponent},
{path :"update/:id", component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './User/adduser.component';
import { AddprojectComponent } from './Project/addproject.component';
import { AddtaskComponent } from './Task/addtask.component';
import { ViewtaskComponent } from './Task/viewtask.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { ViewUserComponent } from './User/view-user.component';
import { ViewProjectComponent } from './Project/view-project.component';
import { UpdateComponent } from './Task/update.component';
import { UserFilterPipe } from './user-filter.pipe';
import { ProjectfilterPipe } from './projectfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    AddprojectComponent,
    AddtaskComponent,
    ViewtaskComponent,
    ViewUserComponent,
    ViewProjectComponent,
    UpdateComponent,
    UserFilterPipe,
    ProjectfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

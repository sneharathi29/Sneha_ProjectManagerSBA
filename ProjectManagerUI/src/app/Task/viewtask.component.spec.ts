import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtaskComponent } from './viewtask.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddprojectComponent } from '../Project/addproject.component';
import { AdduserComponent } from '../User/adduser.component';
import { AddtaskComponent } from './addtask.component';
import { UserFilterPipe } from '../user-filter.pipe';
import { ViewProjectComponent } from '../Project/view-project.component';
import { ViewUserComponent } from '../User/view-user.component';
import { ProjectfilterPipe } from '../projectfilter.pipe';
import { UpdateComponent } from './update.component';

describe('ViewtaskComponent', () => {
  let component: ViewtaskComponent;
  let fixture: ComponentFixture<ViewtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtaskComponent,
        AddprojectComponent,
        AdduserComponent,
        AddtaskComponent,
        UserFilterPipe,
        ViewProjectComponent,
        ViewUserComponent,
        ProjectfilterPipe,
        UpdateComponent
      ]
      ,imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

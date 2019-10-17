import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AddprojectComponent } from './addproject.component';
import { ViewProjectComponent } from './view-project.component';
import { AdduserComponent } from '../User/adduser.component';
import { AddtaskComponent } from '../Task/addtask.component';
import { ViewtaskComponent } from '../Task/viewtask.component';
import { UpdateComponent } from '../Task/update.component';
import { ViewUserComponent } from '../User/view-user.component';
import { UserFilterPipe } from '../user-filter.pipe';
import { ProjectfilterPipe } from '../projectfilter.pipe';

describe('AddprojectComponent', () => {
  let component: AddprojectComponent;
  let fixture: ComponentFixture<AddprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprojectComponent, ViewProjectComponent, AdduserComponent, AddtaskComponent, ViewtaskComponent, UpdateComponent, ViewUserComponent, UserFilterPipe, ProjectfilterPipe]
      ,imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

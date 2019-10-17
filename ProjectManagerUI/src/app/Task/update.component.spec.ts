import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { UpdateComponent } from './update.component';
import { AddprojectComponent } from '../Project/addproject.component';
import { AdduserComponent } from '../User/adduser.component';
import { AddtaskComponent } from './addtask.component';
import { ViewtaskComponent } from './viewtask.component';
import { UserFilterPipe } from '../user-filter.pipe';
import { ViewProjectComponent } from '../Project/view-project.component';
import { ViewUserComponent } from '../User/view-user.component';
import { ProjectfilterPipe } from '../projectfilter.pipe';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComponent,
        AddprojectComponent,
        AdduserComponent,
        AddtaskComponent,
        ViewtaskComponent,
        UserFilterPipe,
        ViewProjectComponent,
        ViewUserComponent,
        ProjectfilterPipe
      ]
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
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AdduserComponent } from './adduser.component';
import { ViewUserComponent } from './view-user.component';
import { UserFilterPipe } from '../user-filter.pipe';
import { AddprojectComponent } from '../Project/addproject.component';
import { ViewProjectComponent } from '../Project/view-project.component';
import { AddtaskComponent } from '../Task/addtask.component';
import { ViewtaskComponent } from '../Task/viewtask.component';
import { UpdateComponent } from '../Task/update.component';
import { ProjectfilterPipe } from '../projectfilter.pipe';

describe('AdduserComponent', () => {
  let component: AdduserComponent;
  let fixture: ComponentFixture<AdduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserComponent,
        ViewUserComponent,
        UserFilterPipe,
        AddprojectComponent,
        ViewProjectComponent,
        AddtaskComponent,
        ViewtaskComponent,
        UpdateComponent,
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
    fixture = TestBed.createComponent(AdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

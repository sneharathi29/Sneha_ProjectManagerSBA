import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { ViewUserComponent } from './view-user.component';
import { UserFilterPipe } from '../user-filter.pipe';
import { AddprojectComponent } from '../Project/addproject.component';
import { ViewProjectComponent } from '../Project/view-project.component';
import { AdduserComponent } from './adduser.component';
import { AddtaskComponent } from '../Task/addtask.component';
import { ViewtaskComponent } from '../Task/viewtask.component';
import { UpdateComponent } from '../Task/update.component';
import { ProjectfilterPipe } from '../projectfilter.pipe';

describe('ViewUserComponent', () => {
  let component: ViewUserComponent;
  let fixture: ComponentFixture<ViewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserComponent,
        UserFilterPipe,
        AddprojectComponent,
        ViewProjectComponent,
        AdduserComponent,
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
    fixture = TestBed.createComponent(ViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditindentrequestComponent } from './addeditindentrequest.component';

describe('AddeditindentrequestComponent', () => {
  let component: AddeditindentrequestComponent;
  let fixture: ComponentFixture<AddeditindentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditindentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditindentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditregistrationrequestComponent } from './addeditregistrationrequest.component';

describe('AddeditregistrationrequestComponent', () => {
  let component: AddeditregistrationrequestComponent;
  let fixture: ComponentFixture<AddeditregistrationrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditregistrationrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditregistrationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

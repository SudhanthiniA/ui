import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotmentrequestComponent } from './allotmentrequest.component';

describe('AllotmentrequestComponent', () => {
  let component: AllotmentrequestComponent;
  let fixture: ComponentFixture<AllotmentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotmentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotmentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

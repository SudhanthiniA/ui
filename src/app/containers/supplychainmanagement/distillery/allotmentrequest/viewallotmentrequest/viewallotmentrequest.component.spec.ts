import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallotmentrequestComponent } from './viewallotmentrequest.component';

describe('ViewallotmentrequestComponent', () => {
  let component: ViewallotmentrequestComponent;
  let fixture: ComponentFixture<ViewallotmentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallotmentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallotmentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

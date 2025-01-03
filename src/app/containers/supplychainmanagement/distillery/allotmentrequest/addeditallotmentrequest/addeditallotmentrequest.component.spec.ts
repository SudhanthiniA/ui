import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditallotmentrequestComponent } from './addeditallotmentrequest.component';

describe('AddeditallotmentrequestComponent', () => {
  let component: AddeditallotmentrequestComponent;
  let fixture: ComponentFixture<AddeditallotmentrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditallotmentrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditallotmentrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

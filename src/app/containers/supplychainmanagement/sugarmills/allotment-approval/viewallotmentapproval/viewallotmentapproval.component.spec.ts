import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallotmentapprovalComponent } from './viewallotmentapproval.component';

describe('ViewallotmentapprovalComponent', () => {
  let component: ViewallotmentapprovalComponent;
  let fixture: ComponentFixture<ViewallotmentapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallotmentapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallotmentapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

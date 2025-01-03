import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddallotmentforeclosureComponent } from './addallotmentforeclosure.component';

describe('AddallotmentforeclosureComponent', () => {
  let component: AddallotmentforeclosureComponent;
  let fixture: ComponentFixture<AddallotmentforeclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddallotmentforeclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddallotmentforeclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

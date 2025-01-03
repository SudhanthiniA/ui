import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallotmentforeclosureComponent } from './viewallotmentforeclosure.component';

describe('ViewallotmentforeclosureComponent', () => {
  let component: ViewallotmentforeclosureComponent;
  let fixture: ComponentFixture<ViewallotmentforeclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallotmentforeclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallotmentforeclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

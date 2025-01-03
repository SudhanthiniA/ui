import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotmentforeclosureComponent } from './allotmentforeclosure.component';

describe('AllotmentforeclosureComponent', () => {
  let component: AllotmentforeclosureComponent;
  let fixture: ComponentFixture<AllotmentforeclosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotmentforeclosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotmentforeclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd9cEfficiencysummaryComponent } from './pd9c-efficiencysummary.component';

describe('Pd9cEfficiencysummaryComponent', () => {
  let component: Pd9cEfficiencysummaryComponent;
  let fixture: ComponentFixture<Pd9cEfficiencysummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd9cEfficiencysummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd9cEfficiencysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

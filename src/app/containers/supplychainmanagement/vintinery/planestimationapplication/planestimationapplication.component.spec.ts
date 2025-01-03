import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanestimationapplicationComponent } from './planestimationapplication.component';

describe('PlanestimationapplicationComponent', () => {
  let component: PlanestimationapplicationComponent;
  let fixture: ComponentFixture<PlanestimationapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanestimationapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanestimationapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottlingPlanComponent } from './bottling-plan.component';

describe('BottlingPlanComponent', () => {
  let component: BottlingPlanComponent;
  let fixture: ComponentFixture<BottlingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottlingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

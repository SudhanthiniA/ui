import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryoutsidestateComponent } from './distilleryoutsidestate.component';

describe('DistilleryoutsidestateComponent', () => {
  let component: DistilleryoutsidestateComponent;
  let fixture: ComponentFixture<DistilleryoutsidestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryoutsidestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryoutsidestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryregoutsideupComponent } from './distilleryregoutsideup.component';

describe('DistilleryregoutsideupComponent', () => {
  let component: DistilleryregoutsideupComponent;
  let fixture: ComponentFixture<DistilleryregoutsideupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryregoutsideupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryregoutsideupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdistilleryregoutsideupComponent } from './viewdistilleryregoutsideup.component';

describe('ViewdistilleryregoutsideupComponent', () => {
  let component: ViewdistilleryregoutsideupComponent;
  let fixture: ComponentFixture<ViewdistilleryregoutsideupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdistilleryregoutsideupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdistilleryregoutsideupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

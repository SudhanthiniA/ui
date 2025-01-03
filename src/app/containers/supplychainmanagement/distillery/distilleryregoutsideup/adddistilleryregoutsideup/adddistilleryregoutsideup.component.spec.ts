import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddistilleryregoutsideupComponent } from './adddistilleryregoutsideup.component';

describe('AdddistilleryregoutsideupComponent', () => {
  let component: AdddistilleryregoutsideupComponent;
  let fixture: ComponentFixture<AdddistilleryregoutsideupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddistilleryregoutsideupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddistilleryregoutsideupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

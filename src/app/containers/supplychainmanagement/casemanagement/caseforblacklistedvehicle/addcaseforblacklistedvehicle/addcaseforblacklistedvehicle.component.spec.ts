import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcaseforblacklistedvehicleComponent } from './addcaseforblacklistedvehicle.component';

describe('AddcaseforblacklistedvehicleComponent', () => {
  let component: AddcaseforblacklistedvehicleComponent;
  let fixture: ComponentFixture<AddcaseforblacklistedvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcaseforblacklistedvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcaseforblacklistedvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

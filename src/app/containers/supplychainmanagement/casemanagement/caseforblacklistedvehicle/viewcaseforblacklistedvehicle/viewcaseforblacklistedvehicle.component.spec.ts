import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcaseforblacklistedvehicleComponent } from './viewcaseforblacklistedvehicle.component';

describe('ViewcaseforblacklistedvehicleComponent', () => {
  let component: ViewcaseforblacklistedvehicleComponent;
  let fixture: ComponentFixture<ViewcaseforblacklistedvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcaseforblacklistedvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcaseforblacklistedvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

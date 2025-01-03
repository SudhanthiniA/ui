import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistilleryLandingComponent } from './distillery-landing.component';

describe('DistilleryLandingComponent', () => {
  let component: DistilleryLandingComponent;
  let fixture: ComponentFixture<DistilleryLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistilleryLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistilleryLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

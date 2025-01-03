import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnscheduledinspectionComponent } from './unscheduledinspection.component';

describe('UnscheduledinspectionComponent', () => {
  let component: UnscheduledinspectionComponent;
  let fixture: ComponentFixture<UnscheduledinspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnscheduledinspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnscheduledinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

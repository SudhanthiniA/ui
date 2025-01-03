import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakageentryComponent } from './breakageentry.component';

describe('BreakageentryComponent', () => {
  let component: BreakageentryComponent;
  let fixture: ComponentFixture<BreakageentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakageentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakageentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

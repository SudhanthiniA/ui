import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbreakageentryComponent } from './viewbreakageentry.component';

describe('ViewbreakageentryComponent', () => {
  let component: ViewbreakageentryComponent;
  let fixture: ComponentFixture<ViewbreakageentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbreakageentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbreakageentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwbreakageentryComponent } from './mwbreakageentry.component';

describe('MwbreakageentryComponent', () => {
  let component: MwbreakageentryComponent;
  let fixture: ComponentFixture<MwbreakageentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwbreakageentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwbreakageentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

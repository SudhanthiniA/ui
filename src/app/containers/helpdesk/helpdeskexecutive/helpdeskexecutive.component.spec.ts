import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskexecutiveComponent } from './helpdeskexecutive.component';

describe('HelpdeskexecutiveComponent', () => {
  let component: HelpdeskexecutiveComponent;
  let fixture: ComponentFixture<HelpdeskexecutiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskexecutiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskexecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

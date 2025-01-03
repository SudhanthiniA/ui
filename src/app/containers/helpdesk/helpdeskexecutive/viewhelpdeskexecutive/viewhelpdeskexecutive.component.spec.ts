import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhelpdeskexecutiveComponent } from './viewhelpdeskexecutive.component';

describe('ViewhelpdeskexecutiveComponent', () => {
  let component: ViewhelpdeskexecutiveComponent;
  let fixture: ComponentFixture<ViewhelpdeskexecutiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhelpdeskexecutiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhelpdeskexecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

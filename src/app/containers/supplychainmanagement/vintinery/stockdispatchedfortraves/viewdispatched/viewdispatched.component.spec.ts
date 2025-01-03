import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdispatchedComponent } from './viewdispatched.component';

describe('ViewdispatchedComponent', () => {
  let component: ViewdispatchedComponent;
  let fixture: ComponentFixture<ViewdispatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdispatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdispatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

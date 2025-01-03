import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwdispatchComponent } from './viewmwdispatch.component';

describe('ViewmwdispatchComponent', () => {
  let component: ViewmwdispatchComponent;
  let fixture: ComponentFixture<ViewmwdispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwdispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

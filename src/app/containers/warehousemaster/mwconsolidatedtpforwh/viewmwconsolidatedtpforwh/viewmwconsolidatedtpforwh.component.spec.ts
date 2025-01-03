import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwconsolidatedtpforwhComponent } from './viewmwconsolidatedtpforwh.component';

describe('ViewmwconsolidatedtpforwhComponent', () => {
  let component: ViewmwconsolidatedtpforwhComponent;
  let fixture: ComponentFixture<ViewmwconsolidatedtpforwhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwconsolidatedtpforwhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwconsolidatedtpforwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

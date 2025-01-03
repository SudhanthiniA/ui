import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwconsolidatedtpforwhComponent } from './mwconsolidatedtpforwh.component';

describe('MwconsolidatedtpforwhComponent', () => {
  let component: MwconsolidatedtpforwhComponent;
  let fixture: ComponentFixture<MwconsolidatedtpforwhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwconsolidatedtpforwhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwconsolidatedtpforwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

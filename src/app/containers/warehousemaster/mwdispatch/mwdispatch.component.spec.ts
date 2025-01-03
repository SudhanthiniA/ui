import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwdispatchComponent } from './mwdispatch.component';

describe('MwdispatchComponent', () => {
  let component: MwdispatchComponent;
  let fixture: ComponentFixture<MwdispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwdispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

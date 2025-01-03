import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtranspassparentloginComponent } from './viewtranspassparentlogin.component';

describe('ViewtranspassparentloginComponent', () => {
  let component: ViewtranspassparentloginComponent;
  let fixture: ComponentFixture<ViewtranspassparentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtranspassparentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtranspassparentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

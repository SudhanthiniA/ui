import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmodeofpayComponent } from './viewmodeofpay.component';

describe('ViewmodeofpayComponent', () => {
  let component: ViewmodeofpayComponent;
  let fixture: ComponentFixture<ViewmodeofpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmodeofpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmodeofpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

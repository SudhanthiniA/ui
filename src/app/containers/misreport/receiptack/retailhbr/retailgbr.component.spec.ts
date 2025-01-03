import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailgbrComponent } from './retailgbr.component';

describe('RetailgbrComponent', () => {
  let component: RetailgbrComponent;
  let fixture: ComponentFixture<RetailgbrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailgbrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailgbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

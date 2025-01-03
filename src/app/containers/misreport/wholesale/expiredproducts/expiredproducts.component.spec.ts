import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredproductsComponent } from './expiredproducts.component';

describe('ExpiredproductsComponent', () => {
  let component: ExpiredproductsComponent;
  let fixture: ComponentFixture<ExpiredproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

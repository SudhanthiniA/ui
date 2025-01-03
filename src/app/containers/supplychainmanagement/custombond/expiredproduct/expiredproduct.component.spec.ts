import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredproductComponent } from './expiredproduct.component';

describe('ExpiredproductComponent', () => {
  let component: ExpiredproductComponent;
  let fixture: ComponentFixture<ExpiredproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

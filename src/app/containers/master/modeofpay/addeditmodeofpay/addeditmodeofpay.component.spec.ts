import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditmodeofpayComponent } from './addeditmodeofpay.component';

describe('AddeditmodeofpayComponent', () => {
  let component: AddeditmodeofpayComponent;
  let fixture: ComponentFixture<AddeditmodeofpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditmodeofpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditmodeofpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptconsuptionComponent } from './receiptconsuption.component';

describe('ReceiptconsuptionComponent', () => {
  let component: ReceiptconsuptionComponent;
  let fixture: ComponentFixture<ReceiptconsuptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptconsuptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptconsuptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

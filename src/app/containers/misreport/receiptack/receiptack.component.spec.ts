import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptackComponent } from './receiptack.component';

describe('ReceiptackComponent', () => {
  let component: ReceiptackComponent;
  let fixture: ComponentFixture<ReceiptackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

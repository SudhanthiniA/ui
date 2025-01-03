import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseofliquorComponent } from './purchaseofliquor.component';

describe('PurchaseofliquorComponent', () => {
  let component: PurchaseofliquorComponent;
  let fixture: ComponentFixture<PurchaseofliquorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseofliquorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseofliquorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

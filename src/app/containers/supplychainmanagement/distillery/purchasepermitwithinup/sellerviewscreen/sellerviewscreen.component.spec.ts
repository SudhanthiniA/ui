import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerviewscreenComponent } from './sellerviewscreen.component';

describe('SellerviewscreenComponent', () => {
  let component: SellerviewscreenComponent;
  let fixture: ComponentFixture<SellerviewscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerviewscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerviewscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

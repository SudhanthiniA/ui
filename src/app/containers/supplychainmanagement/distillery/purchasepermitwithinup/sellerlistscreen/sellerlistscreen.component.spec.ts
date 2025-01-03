import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerlistscreenComponent } from './sellerlistscreen.component';

describe('SellerlistscreenComponent', () => {
  let component: SellerlistscreenComponent;
  let fixture: ComponentFixture<SellerlistscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerlistscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerlistscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

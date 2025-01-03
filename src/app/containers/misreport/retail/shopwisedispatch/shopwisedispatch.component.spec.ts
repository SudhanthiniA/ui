import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopwisedispatchComponent } from './shopwisedispatch.component';

describe('ShopwisedispatchComponent', () => {
  let component: ShopwisedispatchComponent;
  let fixture: ComponentFixture<ShopwisedispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopwisedispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopwisedispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

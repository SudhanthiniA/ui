import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartensComponent } from './cartens.component';

describe('CartensComponent', () => {
  let component: CartensComponent;
  let fixture: ComponentFixture<CartensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

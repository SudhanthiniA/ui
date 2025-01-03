import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiontostorageandproductiontobottlingComponent } from './productiontostorageandproductiontobottling.component';

describe('ProductiontostorageandproductiontobottlingComponent', () => {
  let component: ProductiontostorageandproductiontobottlingComponent;
  let fixture: ComponentFixture<ProductiontostorageandproductiontobottlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiontostorageandproductiontobottlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiontostorageandproductiontobottlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

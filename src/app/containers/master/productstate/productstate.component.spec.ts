import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductstateComponent } from './productstate.component';

describe('ProductstateComponent', () => {
  let component: ProductstateComponent;
  let fixture: ComponentFixture<ProductstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

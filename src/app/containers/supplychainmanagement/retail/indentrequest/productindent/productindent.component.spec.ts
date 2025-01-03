import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductindentComponent } from './productindent.component';

describe('ProductindentComponent', () => {
  let component: ProductindentComponent;
  let fixture: ComponentFixture<ProductindentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductindentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductindentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

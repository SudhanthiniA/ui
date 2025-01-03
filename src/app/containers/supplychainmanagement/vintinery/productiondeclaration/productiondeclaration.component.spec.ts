import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductiondeclarationComponent } from './productiondeclaration.component';

describe('ProductiondeclarationComponent', () => {
  let component: ProductiondeclarationComponent;
  let fixture: ComponentFixture<ProductiondeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductiondeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductiondeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

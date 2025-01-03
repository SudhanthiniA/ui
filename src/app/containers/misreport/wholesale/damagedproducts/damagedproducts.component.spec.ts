import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagedproductsComponent } from './damagedproducts.component';

describe('DamagedproductsComponent', () => {
  let component: DamagedproductsComponent;
  let fixture: ComponentFixture<DamagedproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagedproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

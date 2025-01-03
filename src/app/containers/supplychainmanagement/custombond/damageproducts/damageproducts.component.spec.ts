import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageproductsComponent } from './damageproducts.component';

describe('DamageproductsComponent', () => {
  let component: DamageproductsComponent;
  let fixture: ComponentFixture<DamageproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

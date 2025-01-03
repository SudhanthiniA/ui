import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saletofl11Component } from './saletofl11.component';

describe('Saletofl11Component', () => {
  let component: Saletofl11Component;
  let fixture: ComponentFixture<Saletofl11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saletofl11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saletofl11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

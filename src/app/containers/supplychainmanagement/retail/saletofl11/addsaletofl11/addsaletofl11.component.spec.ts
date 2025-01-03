import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addsaletofl11Component } from './addsaletofl11.component';

describe('Addsaletofl11Component', () => {
  let component: Addsaletofl11Component;
  let fixture: ComponentFixture<Addsaletofl11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addsaletofl11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addsaletofl11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

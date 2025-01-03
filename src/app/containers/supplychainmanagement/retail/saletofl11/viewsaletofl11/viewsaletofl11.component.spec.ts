import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewsaletofl11Component } from './viewsaletofl11.component';

describe('Viewsaletofl11Component', () => {
  let component: Viewsaletofl11Component;
  let fixture: ComponentFixture<Viewsaletofl11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewsaletofl11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewsaletofl11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cl11Component } from './cl11.component';

describe('Cl11Component', () => {
  let component: Cl11Component;
  let fixture: ComponentFixture<Cl11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cl11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cl11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

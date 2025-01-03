import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exportofspiritpd18Component } from './exportofspiritpd18.component';

describe('Exportofspiritpd18Component', () => {
  let component: Exportofspiritpd18Component;
  let fixture: ComponentFixture<Exportofspiritpd18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exportofspiritpd18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exportofspiritpd18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

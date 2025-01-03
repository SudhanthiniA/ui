import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpd2Component } from './addpd2.component';

describe('Addpd2Component', () => {
  let component: Addpd2Component;
  let fixture: ComponentFixture<Addpd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addpd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addpd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addmf4Component } from './addmf4.component';

describe('Addmf4Component', () => {
  let component: Addmf4Component;
  let fixture: ComponentFixture<Addmf4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addmf4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addmf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

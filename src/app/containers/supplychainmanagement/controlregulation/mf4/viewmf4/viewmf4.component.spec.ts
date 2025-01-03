import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewmf4Component } from './viewmf4.component';

describe('Viewmf4Component', () => {
  let component: Viewmf4Component;
  let fixture: ComponentFixture<Viewmf4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewmf4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewmf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

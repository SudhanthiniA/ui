import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tariandsendhicl11Component } from './tariandsendhicl11.component';

describe('Tariandsendhicl11Component', () => {
  let component: Tariandsendhicl11Component;
  let fixture: ComponentFixture<Tariandsendhicl11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tariandsendhicl11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tariandsendhicl11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addbwfl5Component } from './addbwfl5.component';

describe('Addbwfl5Component', () => {
  let component: Addbwfl5Component;
  let fixture: ComponentFixture<Addbwfl5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addbwfl5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addbwfl5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl24Component } from './addfl24.component';

describe('Addfl24Component', () => {
  let component: Addfl24Component;
  let fixture: ComponentFixture<Addfl24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

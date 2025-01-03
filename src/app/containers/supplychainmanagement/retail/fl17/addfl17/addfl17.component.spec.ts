import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl17Component } from './addfl17.component';

describe('Addfl17Component', () => {
  let component: Addfl17Component;
  let fixture: ComponentFixture<Addfl17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mb6Component } from './mb6.component';

describe('Mb6Component', () => {
  let component: Mb6Component;
  let fixture: ComponentFixture<Mb6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mb6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mb6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

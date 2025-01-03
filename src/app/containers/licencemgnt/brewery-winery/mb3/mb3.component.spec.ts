import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mb3Component } from './mb3.component';

describe('Mb3Component', () => {
  let component: Mb3Component;
  let fixture: ComponentFixture<Mb3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mb3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

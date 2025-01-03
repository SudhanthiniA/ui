import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mb4Component } from './mb4.component';

describe('Mb4Component', () => {
  let component: Mb4Component;
  let fixture: ComponentFixture<Mb4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mb4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mb4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

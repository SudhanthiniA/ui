import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mf5Part3Component } from './mf5-part3.component';

describe('Mf5Part3Component', () => {
  let component: Mf5Part3Component;
  let fixture: ComponentFixture<Mf5Part3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mf5Part3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mf5Part3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

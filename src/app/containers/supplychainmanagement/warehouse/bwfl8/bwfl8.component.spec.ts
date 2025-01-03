import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl8Component } from './bwfl8.component';

describe('Bwfl8Component', () => {
  let component: Bwfl8Component;
  let fixture: ComponentFixture<Bwfl8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

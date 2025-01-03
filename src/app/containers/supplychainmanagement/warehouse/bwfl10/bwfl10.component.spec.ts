import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl10Component } from './bwfl10.component';

describe('Bwfl10Component', () => {
  let component: Bwfl10Component;
  let fixture: ComponentFixture<Bwfl10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

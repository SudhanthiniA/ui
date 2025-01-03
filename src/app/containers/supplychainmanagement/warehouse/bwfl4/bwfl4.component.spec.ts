import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bwfl4Component } from './bwfl4.component';

describe('Bwfl4Component', () => {
  let component: Bwfl4Component;
  let fixture: ComponentFixture<Bwfl4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bwfl4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bwfl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

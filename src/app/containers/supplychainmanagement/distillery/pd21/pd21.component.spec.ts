import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pd21Component } from './pd21.component';

describe('Pd21Component', () => {
  let component: Pd21Component;
  let fixture: ComponentFixture<Pd21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pd21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pd21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

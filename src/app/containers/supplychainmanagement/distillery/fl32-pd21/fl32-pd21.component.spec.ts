import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fl32Pd21Component } from './fl32-pd21.component';

describe('Fl32Pd21Component', () => {
  let component: Fl32Pd21Component;
  let fixture: ComponentFixture<Fl32Pd21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fl32Pd21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fl32Pd21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

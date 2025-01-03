import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewfl32Pd21Component } from './viewfl32-pd21.component';

describe('Viewfl32Pd21Component', () => {
  let component: Viewfl32Pd21Component;
  let fixture: ComponentFixture<Viewfl32Pd21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewfl32Pd21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewfl32Pd21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

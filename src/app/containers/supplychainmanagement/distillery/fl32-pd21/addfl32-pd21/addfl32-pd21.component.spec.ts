import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl32Pd21Component } from './addfl32-pd21.component';

describe('Addfl32Pd21Component', () => {
  let component: Addfl32Pd21Component;
  let fixture: ComponentFixture<Addfl32Pd21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl32Pd21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl32Pd21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

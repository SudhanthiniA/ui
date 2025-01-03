import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Annexure22Component } from './annexure22.component';

describe('Annexure22Component', () => {
  let component: Annexure22Component;
  let fixture: ComponentFixture<Annexure22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Annexure22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Annexure22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl21Component } from './addfl21.component';

describe('Addfl21Component', () => {
  let component: Addfl21Component;
  let fixture: ComponentFixture<Addfl21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

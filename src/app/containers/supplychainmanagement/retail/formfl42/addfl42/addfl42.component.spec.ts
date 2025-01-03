import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl42Component } from './addfl42.component';

describe('Addfl42Component', () => {
  let component: Addfl42Component;
  let fixture: ComponentFixture<Addfl42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addfl28Component } from './addfl28.component';

describe('Addfl28Component', () => {
  let component: Addfl28Component;
  let fixture: ComponentFixture<Addfl28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addfl28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addfl28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

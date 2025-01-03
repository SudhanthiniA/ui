import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpreviewmf6part1Component } from './viewpreviewmf6part1.component';

describe('Viewpreviewmf6part1Component', () => {
  let component: Viewpreviewmf6part1Component;
  let fixture: ComponentFixture<Viewpreviewmf6part1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewpreviewmf6part1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewpreviewmf6part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

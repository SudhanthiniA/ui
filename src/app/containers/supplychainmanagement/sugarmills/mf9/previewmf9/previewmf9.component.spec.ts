import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Previewmf9Component } from './previewmf9.component';

describe('Previewmf9Component', () => {
  let component: Previewmf9Component;
  let fixture: ComponentFixture<Previewmf9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Previewmf9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Previewmf9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

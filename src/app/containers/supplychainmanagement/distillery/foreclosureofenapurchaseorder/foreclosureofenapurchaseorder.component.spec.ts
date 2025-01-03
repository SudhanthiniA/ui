import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeclosureofenapurchaseorderComponent } from './foreclosureofenapurchaseorder.component';

describe('ForeclosureofenapurchaseorderComponent', () => {
  let component: ForeclosureofenapurchaseorderComponent;
  let fixture: ComponentFixture<ForeclosureofenapurchaseorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeclosureofenapurchaseorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeclosureofenapurchaseorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

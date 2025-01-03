import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotOtdeclarationOtContinuationProcessComponent } from './cot-otdeclaration-ot-continuation-process.component';

describe('CotOtdeclarationOtContinuationProcessComponent', () => {
  let component: CotOtdeclarationOtContinuationProcessComponent;
  let fixture: ComponentFixture<CotOtdeclarationOtContinuationProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotOtdeclarationOtContinuationProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotOtdeclarationOtContinuationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesizeComponent } from './casesize.component';

describe('CasesizeComponent', () => {
  let component: CasesizeComponent;
  let fixture: ComponentFixture<CasesizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

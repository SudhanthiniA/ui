import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotdeclarationComponent } from '../cotdeclaration.component

describe('CotdeclarationComponent', () => {
  let component: CotdeclarationComponent;
  let fixture: ComponentFixture<CotdeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotdeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotdeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

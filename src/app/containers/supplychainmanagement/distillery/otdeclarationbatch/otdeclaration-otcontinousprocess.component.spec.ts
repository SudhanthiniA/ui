import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtdeclarationotcontinousprocessComponent } from './otdeclaration-otcontinousprocess.component';

describe('OtdeclarationotcontinousprocessComponent', () => {
  let component: OtdeclarationotcontinousprocessComponent;
  let fixture: ComponentFixture<OtdeclarationotcontinousprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtdeclarationotcontinousprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtdeclarationotcontinousprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

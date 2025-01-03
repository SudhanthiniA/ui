import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AecapprovalviewonlyComponent } from './aecapprovalviewonly.component';

describe('AecapprovalviewonlyComponent', () => {
  let component: AecapprovalviewonlyComponent;
  let fixture: ComponentFixture<AecapprovalviewonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AecapprovalviewonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AecapprovalviewonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

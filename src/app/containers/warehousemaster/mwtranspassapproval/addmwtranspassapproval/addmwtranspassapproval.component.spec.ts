import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmwtranspassapprovalComponent } from './addmwtranspassapproval.component';

describe('AddmwtranspassapprovalComponent', () => {
  let component: AddmwtranspassapprovalComponent;
  let fixture: ComponentFixture<AddmwtranspassapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmwtranspassapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmwtranspassapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

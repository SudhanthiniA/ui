import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwtranspassapprovalComponent } from './mwtranspassapproval.component';

describe('MwtranspassapprovalComponent', () => {
  let component: MwtranspassapprovalComponent;
  let fixture: ComponentFixture<MwtranspassapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwtranspassapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwtranspassapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

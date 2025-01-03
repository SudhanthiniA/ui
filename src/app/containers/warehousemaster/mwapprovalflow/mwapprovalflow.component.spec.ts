import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwapprovalflowComponent } from './mwapprovalflow.component';

describe('MwapprovalflowComponent', () => {
  let component: MwapprovalflowComponent;
  let fixture: ComponentFixture<MwapprovalflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwapprovalflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwapprovalflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchmwtranspassapprovalComponent } from './dispatchmwtranspassapproval.component';

describe('DispatchmwtranspassapprovalComponent', () => {
  let component: DispatchmwtranspassapprovalComponent;
  let fixture: ComponentFixture<DispatchmwtranspassapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchmwtranspassapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchmwtranspassapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

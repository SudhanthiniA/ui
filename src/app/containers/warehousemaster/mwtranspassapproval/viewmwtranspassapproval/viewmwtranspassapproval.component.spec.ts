import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmwtranspassapprovalComponent } from './viewmwtranspassapproval.component';

describe('ViewmwtranspassapprovalComponent', () => {
  let component: ViewmwtranspassapprovalComponent;
  let fixture: ComponentFixture<ViewmwtranspassapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmwtranspassapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmwtranspassapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

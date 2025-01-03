import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinealapprovalComponent } from './stockinealapproval.component';

describe('StockinealapprovalComponent', () => {
  let component: StockinealapprovalComponent;
  let fixture: ComponentFixture<StockinealapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinealapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinealapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

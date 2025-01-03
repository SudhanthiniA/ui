import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewapplicationforlableapprovalComponent } from './viewapplicationforlableapproval.component';

describe('ViewapplicationforlableapprovalComponent', () => {
  let component: ViewapplicationforlableapprovalComponent;
  let fixture: ComponentFixture<ViewapplicationforlableapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewapplicationforlableapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewapplicationforlableapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

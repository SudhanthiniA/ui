import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconsignmentreceiptComponent } from './viewconsignmentreceipt.component';

describe('ViewconsignmentreceiptComponent', () => {
  let component: ViewconsignmentreceiptComponent;
  let fixture: ComponentFixture<ViewconsignmentreceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewconsignmentreceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconsignmentreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

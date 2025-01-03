import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicensepaymentComponent } from './viewlicensepayment.component';

describe('ViewlicensepaymentComponent', () => {
  let component: ViewlicensepaymentComponent;
  let fixture: ComponentFixture<ViewlicensepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicensepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicensepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

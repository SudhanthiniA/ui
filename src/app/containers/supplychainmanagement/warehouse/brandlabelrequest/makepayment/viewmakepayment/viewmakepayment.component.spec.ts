import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmakepaymentComponent } from './viewmakepayment.component';

describe('ViewmakepaymentComponent', () => {
  let component: ViewmakepaymentComponent;
  let fixture: ComponentFixture<ViewmakepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmakepaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmakepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

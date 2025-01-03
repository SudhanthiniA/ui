import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewintercbwdispatchComponent } from './viewintercbwdispatch.component';

describe('ViewintercbwdispatchComponent', () => {
  let component: ViewintercbwdispatchComponent;
  let fixture: ComponentFixture<ViewintercbwdispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewintercbwdispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewintercbwdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

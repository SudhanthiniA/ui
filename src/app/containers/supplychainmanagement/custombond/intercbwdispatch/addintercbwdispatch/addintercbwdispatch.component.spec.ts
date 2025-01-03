import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddintercbwdispatchComponent } from './addintercbwdispatch.component';

describe('AddintercbwdispatchComponent', () => {
  let component: AddintercbwdispatchComponent;
  let fixture: ComponentFixture<AddintercbwdispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddintercbwdispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddintercbwdispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

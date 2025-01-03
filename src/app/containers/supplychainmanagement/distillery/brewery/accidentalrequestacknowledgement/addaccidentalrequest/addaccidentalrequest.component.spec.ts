import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccidentalrequestComponent } from './addaccidentalrequest.component';

describe('AddaccidentalrequestComponent', () => {
  let component: AddaccidentalrequestComponent;
  let fixture: ComponentFixture<AddaccidentalrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccidentalrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccidentalrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtpcancellationrequestComponent } from './addtpcancellationrequest.component';

describe('AddtpcancellationrequestComponent', () => {
  let component: AddtpcancellationrequestComponent;
  let fixture: ComponentFixture<AddtpcancellationrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtpcancellationrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtpcancellationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

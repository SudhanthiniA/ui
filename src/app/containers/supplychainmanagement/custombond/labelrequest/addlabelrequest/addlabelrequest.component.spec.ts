import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabelrequestComponent } from './addlabelrequest.component';

describe('AddlabelrequestComponent', () => {
  let component: AddlabelrequestComponent;
  let fixture: ComponentFixture<AddlabelrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlabelrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlabelrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

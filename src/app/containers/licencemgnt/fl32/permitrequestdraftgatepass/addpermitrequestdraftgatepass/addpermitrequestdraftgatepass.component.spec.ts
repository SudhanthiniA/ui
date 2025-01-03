import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpermitrequestdraftgatepassComponent } from './addpermitrequestdraftgatepass.component';

describe('AddpermitrequestdraftgatepassComponent', () => {
  let component: AddpermitrequestdraftgatepassComponent;
  let fixture: ComponentFixture<AddpermitrequestdraftgatepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpermitrequestdraftgatepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpermitrequestdraftgatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorderpickupnewComponent } from './addorderpickupnew.component';

describe('AddorderpickupnewComponent', () => {
  let component: AddorderpickupnewComponent;
  let fixture: ComponentFixture<AddorderpickupnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddorderpickupnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddorderpickupnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

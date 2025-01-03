import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgatepasscancelComponent } from './addgatepasscancel.component';

describe('AddgatepasscancelComponent', () => {
  let component: AddgatepasscancelComponent;
  let fixture: ComponentFixture<AddgatepasscancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgatepasscancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgatepasscancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

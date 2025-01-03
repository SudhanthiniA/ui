import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabelregistrationComponent } from './addlabelregistration.component';

describe('AddlabelregistrationComponent', () => {
  let component: AddlabelregistrationComponent;
  let fixture: ComponentFixture<AddlabelregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlabelregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlabelregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

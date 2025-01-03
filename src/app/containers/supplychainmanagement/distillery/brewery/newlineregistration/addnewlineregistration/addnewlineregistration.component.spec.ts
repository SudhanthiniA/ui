import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewlineregistrationComponent } from './addnewlineregistration.component';

describe('AddnewlineregistrationComponent', () => {
  let component: AddnewlineregistrationComponent;
  let fixture: ComponentFixture<AddnewlineregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewlineregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewlineregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfinancialechallverificationComponent } from './addfinancialechallverification.component';

describe('AddfinancialechallverificationComponent', () => {
  let component: AddfinancialechallverificationComponent;
  let fixture: ComponentFixture<AddfinancialechallverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfinancialechallverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfinancialechallverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

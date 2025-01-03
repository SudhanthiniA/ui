import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccidentalApplicationComponent } from './addaccidental-application.component';

describe('AddaccidentalApplicationComponent', () => {
  let component: AddaccidentalApplicationComponent;
  let fixture: ComponentFixture<AddaccidentalApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccidentalApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaccidentalApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

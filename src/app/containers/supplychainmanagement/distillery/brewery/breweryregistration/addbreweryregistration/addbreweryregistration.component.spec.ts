import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbreweryregistrationComponent } from './addbreweryregistration.component';

describe('AddbreweryregistrationComponent', () => {
  let component: AddbreweryregistrationComponent;
  let fixture: ComponentFixture<AddbreweryregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbreweryregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbreweryregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

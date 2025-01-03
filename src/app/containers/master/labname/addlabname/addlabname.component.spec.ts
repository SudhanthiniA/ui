import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlabnameComponent } from './addlabname.component';

describe('AddlabnameComponent', () => {
  let component: AddlabnameComponent;
  let fixture: ComponentFixture<AddlabnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlabnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlabnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlicenceComponent } from './addlicence.component';

describe('AddlicenceComponent', () => {
  let component: AddlicenceComponent;
  let fixture: ComponentFixture<AddlicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

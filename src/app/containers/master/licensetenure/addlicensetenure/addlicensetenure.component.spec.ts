import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlicensetenureComponent } from './addlicensetenure.component';

describe('AddlicensetenureComponent', () => {
  let component: AddlicensetenureComponent;
  let fixture: ComponentFixture<AddlicensetenureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlicensetenureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlicensetenureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

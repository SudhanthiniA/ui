import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmassflowofficerComponent } from './addmassflowofficer.component';

describe('AddmassflowofficerComponent', () => {
  let component: AddmassflowofficerComponent;
  let fixture: ComponentFixture<AddmassflowofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmassflowofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmassflowofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

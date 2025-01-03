import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexticketComponent } from './addexticket.component';

describe('AddexticketComponent', () => {
  let component: AddexticketComponent;
  let fixture: ComponentFixture<AddexticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

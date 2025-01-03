import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgeoaddressComponent } from './addgeoaddress.component';

describe('AddgeoaddressComponent', () => {
  let component: AddgeoaddressComponent;
  let fixture: ComponentFixture<AddgeoaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgeoaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgeoaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

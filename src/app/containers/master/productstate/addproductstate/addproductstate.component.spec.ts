import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductstateComponent } from './addproductstate.component';

describe('AddproductstateComponent', () => {
  let component: AddproductstateComponent;
  let fixture: ComponentFixture<AddproductstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

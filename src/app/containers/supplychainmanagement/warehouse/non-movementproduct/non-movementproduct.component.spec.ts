import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonMovementproductComponent } from './non-movementproduct.component';

describe('NonMovementproductComponent', () => {
  let component: NonMovementproductComponent;
  let fixture: ComponentFixture<NonMovementproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonMovementproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMovementproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

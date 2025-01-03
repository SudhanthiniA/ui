import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimportenaoutsidestateComponent } from './addimportenaoutsidestate.component';

describe('AddimportenaoutsidestateComponent', () => {
  let component: AddimportenaoutsidestateComponent;
  let fixture: ComponentFixture<AddimportenaoutsidestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimportenaoutsidestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimportenaoutsidestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

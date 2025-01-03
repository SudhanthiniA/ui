import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimportofgrainmaltspiritisComponent } from './addimportofgrainmaltspiritis.component';

describe('AddimportofgrainmaltspiritisComponent', () => {
  let component: AddimportofgrainmaltspiritisComponent;
  let fixture: ComponentFixture<AddimportofgrainmaltspiritisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimportofgrainmaltspiritisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimportofgrainmaltspiritisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

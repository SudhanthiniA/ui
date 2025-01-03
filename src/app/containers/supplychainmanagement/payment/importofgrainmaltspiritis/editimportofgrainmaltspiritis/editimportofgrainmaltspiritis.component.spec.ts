import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditimportofgrainmaltspiritisComponent } from './editimportofgrainmaltspiritis.component';

describe('EditimportofgrainmaltspiritisComponent', () => {
  let component: EditimportofgrainmaltspiritisComponent;
  let fixture: ComponentFixture<EditimportofgrainmaltspiritisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditimportofgrainmaltspiritisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditimportofgrainmaltspiritisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditvehicleComponent } from './addeditvehicle.component';

describe('AddeditvehicleComponent', () => {
  let component: AddeditvehicleComponent;
  let fixture: ComponentFixture<AddeditvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

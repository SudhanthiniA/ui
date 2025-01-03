import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditvehiclemodelComponent } from './addeditvehiclemodel.component';

describe('AddeditvehiclemodelComponent', () => {
  let component: AddeditvehiclemodelComponent;
  let fixture: ComponentFixture<AddeditvehiclemodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditvehiclemodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditvehiclemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

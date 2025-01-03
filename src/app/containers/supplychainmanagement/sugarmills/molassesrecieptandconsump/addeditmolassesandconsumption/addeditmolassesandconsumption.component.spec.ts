import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditmolassesandconsumptionComponent } from './addeditmolassesandconsumption.component';

describe('AddeditmolassesandconsumptionComponent', () => {
  let component: AddeditmolassesandconsumptionComponent;
  let fixture: ComponentFixture<AddeditmolassesandconsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditmolassesandconsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditmolassesandconsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

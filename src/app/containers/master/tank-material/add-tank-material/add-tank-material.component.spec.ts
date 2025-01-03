import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTankMaterialComponent } from './add-tank-material.component';

describe('AddTankMaterialComponent', () => {
  let component: AddTankMaterialComponent;
  let fixture: ComponentFixture<AddTankMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTankMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTankMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

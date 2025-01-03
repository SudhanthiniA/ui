import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTankMaterialComponent } from './view-tank-material.component';

describe('ViewTankMaterialComponent', () => {
  let component: ViewTankMaterialComponent;
  let fixture: ComponentFixture<ViewTankMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTankMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTankMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

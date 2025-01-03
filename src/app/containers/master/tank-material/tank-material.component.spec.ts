import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankMaterialComponent } from './tank-material.component';

describe('TankMaterialComponent', () => {
  let component: TankMaterialComponent;
  let fixture: ComponentFixture<TankMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

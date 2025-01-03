import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideupdistilleryforcheavyComponent } from './insideupdistilleryforcheavy.component';

describe('InsideupdistilleryforcheavyComponent', () => {
  let component: InsideupdistilleryforcheavyComponent;
  let fixture: ComponentFixture<InsideupdistilleryforcheavyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideupdistilleryforcheavyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideupdistilleryforcheavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

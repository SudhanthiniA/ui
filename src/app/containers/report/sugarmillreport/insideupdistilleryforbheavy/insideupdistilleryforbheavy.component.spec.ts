import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideupdistilleryforbheavyComponent } from './insideupdistilleryforbheavy.component';

describe('InsideupdistilleryforbheavyComponent', () => {
  let component: InsideupdistilleryforbheavyComponent;
  let fixture: ComponentFixture<InsideupdistilleryforbheavyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideupdistilleryforbheavyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideupdistilleryforbheavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

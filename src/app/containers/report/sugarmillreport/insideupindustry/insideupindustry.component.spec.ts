import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideupindustryComponent } from './insideupindustry.component';

describe('InsideupindustryComponent', () => {
  let component: InsideupindustryComponent;
  let fixture: ComponentFixture<InsideupindustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideupindustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideupindustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

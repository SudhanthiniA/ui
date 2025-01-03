import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlliftingcompareComponent } from './flliftingcompare.component';

describe('FlliftingcompareComponent', () => {
  let component: FlliftingcompareComponent;
  let fixture: ComponentFixture<FlliftingcompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlliftingcompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlliftingcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

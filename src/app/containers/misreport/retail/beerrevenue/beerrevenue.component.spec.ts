import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerrevenueComponent } from './beerrevenue.component';

describe('BeerrevenueComponent', () => {
  let component: BeerrevenueComponent;
  let fixture: ComponentFixture<BeerrevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerrevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerrevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

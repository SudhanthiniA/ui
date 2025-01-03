import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryWineryComponent } from './brewery-winery.component';

describe('BreweryWineryComponent', () => {
  let component: BreweryWineryComponent;
  let fixture: ComponentFixture<BreweryWineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryWineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryWineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
